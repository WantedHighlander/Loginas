import React, {Component, Fragment} from 'react';
import { View, Text, Image } from 'react-native';
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
            temp: false
        };
        this.registerUser = this.registerUser.bind(this);
        this.onRegistrationFail = this.onRegistrationFail.bind(this);
    }

    registerUser() {
        const{ user_, pass_, conf_ } = this.state;

        this.setState({error: '', loading: true});

        axios({
            method: 'POST',
            url: 'http://ec2-3-120-243-184.eu-central-1.compute.amazonaws.com:3000/signup',
            headers: {
                user_: user_,
                pass_: pass_,
                conf_: conf_
            }
        })
            .then((response) => {
                this.setState({temp: true});
            })
            .catch((error) => {
                console.log(error);
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
        const {user_, pass_, conf_, error, loading, temp} = this.state;
        const { form, section, errorTextStyle, logo } = styles;

        if(!temp) {
            return (
                <Fragment>
                    <View style = {form}>
                        <Image style={logo} source={require('../images/logo.jpg')}>
                        </Image>
                        <View style = {section}>
                            <Input
                                placeholder="username"
                                label = "Your username"
                                value = {user_}
                                onChangeText={user_ => this.setState({ user_ })}
                            />
                        </View>

                        <View style = {section}>
                            <Input
                                secureTextEntry
                                placeholder = "password"
                                label = "Your password"
                                value = {pass_}
                                onChangeText={pass_ => this.setState({ pass_ })}
                            />
                        </View>

                        <View style = {section}>
                            <Input
                                secureTextEntry
                                placeholder = "password"
                                label = "Confirm password"
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
                    </View>
                    <TextLink onPress = {this.props.authSwitch}>
                        Log in
                    </TextLink>
                </Fragment>
            );
        }
        else {
            return(
                <Button onPress={this.props.authSwitch}>
                    Successful registration
                </Button>
                )
        }
    }
}

const styles = {
    form: {
        width: '100%',
        borderTopWidth: 1,
        borderColor: '#ddd',
    },
    section: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        backgroundColor: '#fff',
        borderColor: '#b3b3b3'
    },
    errorTextStyle: {
        alignSelf: 'center',
        fontSize: 18,
        color: 'red'
    },
    logo: {
        position:'relative',
        width: 256,
        height: 165,
    }
};

export { Registration };