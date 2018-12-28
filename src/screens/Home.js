import React, { Component } from 'react';
import { View, Text, Image} from 'react-native';
import {Button} from '../components/common';
import {AppContainer} from '../components/common/AppNavigator';
export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false
        };
    }
    render() {
        const {container,userText,errorText,logo,logoContainer,form} = styles;
        return (
            <View style={form}>
                <View style={logoContainer}>
                <Image style={logo} source={require('../images/Logo4.png')}>
                </Image>
                </View>
                <Button style = {container} onPress = {() => this.props.navigation.navigate('Join')}>
                    Join Lobby
                </Button>
                <Button style = {container} onPress = {() => this.props.navigation.navigate('Create')}>
                    Create Lobby
                </Button>
                <Button onPress = {this.props.deleteJWT}>
                    Log Out
                </Button>
            </View>
        )
    }
}

const styles = {
    form: {
        flex:1,
        backgroundColor: '#e6e6e6',
        width: '100%',
        borderTopWidth: 1,
        borderColor: '#ddd',
    },
    logoContainer: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
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
        width: '45%',
        height: '30%',
    },
};
