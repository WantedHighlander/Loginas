import React, {Component, Fragment} from 'react';
import { View, Text, Image,TextInput } from 'react-native';
import {Input, TextLink, Button, Loading} from "./common";
import axios from 'axios';
import deviceStorage from '../services/deviceStorage';

class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user_: '',
            pass_: '',
            conf_: '',
            error: '',
            loading: false,
            accCreated: false
        };
        this.registerUser = this.registerUser.bind(this);
        this.onRegistrationFail = this.onRegistrationFail.bind(this);
    }

    registerUser() {
        const{ user_, pass_, conf_ } = this.state;

        this.setState({error: '', loading: true});
        axios({
            method: 'POST',
            url: 'http://ec2-18-196-219-56.eu-central-1.compute.amazonaws.com:3000/signup',
            headers: {
                user_: user_,
                pass_: pass_,
                conf_: conf_
            }
        })
            .then((response) => {
                console.log(response.headers.message_);
                if(response.headers.status_=='success')
                {
                    this.setState({accCreated: true, loading: false});
                }
                else if(response.headers.status_=='error') {
                            this.setState({
                                loading: false,
                                error: response.headers.message_
                            });
                    }

                })
            .catch((error) => {
                console.log(response.headers);
                this.onRegistrationFail();
            });
    }

    onRegistrationFail() {
        this.setState({
            error: 'Registration Failed',
            loading: false
        });
    }

    render() {
        const {user_, pass_, conf_, error, loading, accCreated} = this.state;
        const { form, section, errorTextStyle, logo, Success,logoContainer} = styles;

        if(!accCreated) {
            return (
                <Fragment>
                    <View style = {form}>
                        <View style={logoContainer}>
                        <Image style={logo} source={require('../images/Logo4.png')}>
                        </Image>
                        </View>
                        <View style = {section}>
                            <TextInput style={styles.input}
                                       placeholder="Enter the username"
                                       placeholderTextColor='rgba(0,0,0)'
                                       returnKeyType='next'
                                       autoCorrect={false}
                                       value = {user_}
                                       onChangeText={user_ => this.setState({ user_ })}
                            />

                        </View>

                        <View style = {section}>
                            <TextInput style={styles.input}
                                secureTextEntry
                                placeholder = "Enter the password"
                                value = {pass_}
                                onChangeText={pass_ => this.setState({ pass_ })}
                            />
                        </View>

                        <View style = {section}>
                            <TextInput style={styles.input}
                                secureTextEntry
                                placeholder = "Confirm your password"
                                value = {conf_}
                                onChangeText={conf_ => this.setState({ conf_ })}
                            />
                        </View>
                        <Text style = {errorTextStyle}>
                            {error}
                        </Text>

                        {!loading ?
                            <Button onPress = {this.registerUser}>
                                Register
                            </Button>
                            :
                            <Loading size = {'large'} />

                        }
                        <Button
                        onPress = {this.props.authSwitch}>
                        Already have an account
                    </Button>
                    </View>

                </Fragment>
            );
        }
        else {
            return(
                <Fragment>
                    <Text style={Success}>
                        Your account has been registered
                    </Text>
                    <Button onPress={this.props.authSwitch}>
                        Go to Login
                    </Button>
                </Fragment>
                )
        }
    }
}

const styles = {
    logoContainer: {
         flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    form: {
        flex:1,
        backgroundColor: '#e6e6e6',
        width: '100%',
        borderTopWidth: 1,
        borderColor: '#ddd',
    },
    input: {
        flex:1,
        height: 50,
        color: '#000000',
        marginBottom: 10,
        paddingHorizontal: 10
    },
    section: {
        height:'10%',
        flexDirection: 'row',
        borderBottomWidth: 1,
        backgroundColor: '#e6e6e6',
        borderColor: '#b3b3b3'
    },
    errorTextStyle: {
        alignSelf: 'center',
        fontSize: 18,
        color: 'red'
    },
    logo: {
        position:'relative',
        width: '55%',
        height: '60%',
    },
    Success: {
        textAlign: 'center',
        fontSize: 18,
        color: 'green',
    }
};

export { Registration };