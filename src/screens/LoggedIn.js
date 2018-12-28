import React, {Component} from 'react';
import {View, Text, Image, Platform} from 'react-native';
import {Button, Loading} from '../components/common';
import { AppContainer } from "../components/common/AppNavigator";

export default class LoggedIn extends Component {
    render() {
        return (
            <AppContainer ref={nav => {
                this.navigator = nav;
            }}/>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    userText: {
        alignSelf: 'center',
        color: 'black',
        fontSize: 20
    },
    errorText: {
        alignSelf: 'center',
        fontSize: 18,
        color: 'red'
    },
    logo: {
        position:'relative',
        width: 256,
        height: 120,
    }
};