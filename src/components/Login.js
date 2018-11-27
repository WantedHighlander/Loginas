import React, { Component, Fragment } from 'react';
import { Text, View } from 'react-native';
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
            url: 'http://ec2-3-120-243-184.eu-central-1.compute.amazonaws.com:3000/login',
            headers: {
                user_: user_,
                pass_: pass_
            }
        })
            .then((response) => {
                deviceStorage.saveItem("verisecret", response.headers.token_);
                this.props.newJWT(response.headers);
                console.log(response.headers.token_);
            })
            .catch((error) => {
                console.log(error);
                this.onLoginFail();
            });*/
        this.props.newJWT("taisymas");
    }

    onLoginFail() {
        this.setState({
            error: 'Login Failed',
            loading: false
        });
    }

    render() {
        const { user_, pass_, error, loading } = this.state;
        const { form, section, errorTextStyle } = styles;

        return (
            <Fragment>
                <View style={form}>
                    <View style={section}>
                        <Input
                            placeholder="Username"
                            label="Username"
                            value={user_}
                            onChangeText={user_ => this.setState({ user_ })}
                        />
                    </View>

                    <View style={section}>
                        <Input
                            secureTextEntry
                            placeholder="password"
                            label="Password"
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

                </View>
                <TextLink onPress={this.props.authSwitch}>
                    Don't have an account? Register!
                </TextLink>
            </Fragment>
        );
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
        borderColor: '#ddd',
    },
    errorTextStyle: {
        alignSelf: 'center',
        fontSize: 18,
        color: 'red'
    }
};

export { Login };