import React, { Component, Fragment } from 'react';
import {Text, View, Image, TextInput} from 'react-native';
import { Input, TextLink, Loading, Button } from './common';
import axios from 'axios';
import deviceStorage from '../services/deviceStorage';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            user_: '',
            pass_: '',
            error: '',
            loading: false
        };

        this.loginUser = this.loginUser.bind(this);
        this.onLoginFail = this.onLoginFail.bind(this);
    }

    loginUser() {
        const { user_, pass_ } = this.state;

        this.setState({ error: '', loading: true });

        /*axios({
            method: 'POST',
            url: 'http://ec2-18-196-219-56.eu-central-1.compute.amazonaws.com:3000/login',
            headers: {
                user_: user_,
                pass_: pass_
            }
        })
            .then((response) => {
                deviceStorage.saveItem("verisecret", response.headers.token_);
                this.props.newJWT(response.headers.token_);
            })
            .catch((error) => {
                console.log(error);
                this.onLoginFail();
            });*/
        this.props.newJWT("taisymas");
        deviceStorage.saveItem("verisecret", "taisymas");
    }

    onLoginFail() {
        this.setState({
            error: 'Login Failed',
            loading: false
        });
    }

    render() {
        const { user_, pass_, error, loading } = this.state;
        const { form, section, errorTextStyle, logo,logoContainer } = styles;

        return (
            <Fragment>
                <View style={form}>
                    <View style={logoContainer}>
                    <Image style={logo} source={require('../images/Logo4.png')}>
                    </Image>
                    </View>
                    <View style={section}>
                        <TextInput style={styles.input}
                            placeholder="Enter your username"
                            value={user_}
                            onChangeText={user_ => this.setState({ user_ })}
                        />
                    </View>

                    <View style={section}>
                        <TextInput style={styles.input}
                            secureTextEntry
                            placeholder="Enter your password"
                            value={pass_}
                            onChangeText={pass_ => this.setState({ pass_ })}
                        />
                    </View>

                    <Text style={errorTextStyle}>
                        {error}
                    </Text>

                    {!loading ?
                        <Button onPress = {this.loginUser}>
                            Login
                        </Button>
                        :
                        <Loading size={'large'} />
                    }
                    <Button onPress={this.props.authSwitch}>
                        Don't have an account
                    </Button>
                </View>
            </Fragment>
        );
    }
}

const styles = {
    logoContainer: {
        height:'50%',
        width:'100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    form: {
        flex: 1,
        backgroundColor: '#e6e6e6',
        width: '100%',
        borderTopWidth: 1,
        borderColor: '#ddd',
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
    }
};

export { Login };