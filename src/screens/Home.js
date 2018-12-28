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
        const {container,userText,errorText,logo} = styles;
        return (
            <View>
                <Image style={logo} source={require('../images/logo.jpg')}>
                </Image>
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
