import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import {Button, Loading} from '../components/common';
import axios from 'axios';

export default class LoggedIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            user_: '',
            error: ''
        }
    }
    render() {
        const { container, userText, errorText, logo } = styles;
        const { loading, user_ , error } = this.state;
        if(loading) {
            return (
                <View style = {container}>
                    <Loading size = {'large'} />
                </View>
            )
        }
        else {
            return (
                <View style = {container}>
                    <Image style = {logo} source={require('../images/logo.jpg')}>
                    </Image>
                    <Button>
                        Play
                    </Button>
                    <Button>
                        How to play
                    </Button>
                    <Button onPress = {this.props.deleteJWT}>
                        Log Out
                    </Button>
                </View>
            );
        }
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