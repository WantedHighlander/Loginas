import React, {Component, Fragment} from 'react';
import { View, Text } from 'react-native';
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
            loading: false
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
        const {user_, pass_, conf_, error, loading} = this.state;
        const { form, section, errorTextStyle } = styles;


        return (
            <Fragment>
                <View style = {form}>
                    <View style = {section}>
                        <Input
                            placeholder="username"
                            label = "Username"
                            value = {user_}
                            onChangeText={user_ => this.setState({ user_ })}
                        />
                    </View>

                    <View style = {section}>
                        <Input
                            secureTextEntry
                            placeholder = "password"
                            label = "Password"
                            value = {pass_}
                            onChangeText={pass_ => this.setState({ pass_ })}
                        />
                    </View>

                    <View style = {section}>
                        <Input
                            secureTextEntry
                            placeholder = "confirm password"
                            label = " password"
                            value = {conf_}
                            onChangeText={conf_ => this.setState({ conf_ })}
                        />
                    </View>
                    <Text style = {errorTextStyle}>
                        {error}
                        </Text>

                    {!loading ?
                        <Button onPress = {this.props.authSwitch}>
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
        borderColor: '#ddd'
    },
    errorTextStyle: {
        alignSelf: 'center',
        fontSize: 18,
        color: 'red'
    }
};

export { Registration };