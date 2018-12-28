import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {Button} from '../components/common';
import {Home} from "./Home";

export class Create extends Component {
    render() {
        const {container,userText,errorText,logo} = styles;
        return (
            <View>
                <Text style = {userText} >
                    Create lobby
                </Text>
                <Button onPress={() => this.props.navigation.navigate('Home')}>
                    Go to main screen
                </Button>
            </View>
        )
    }
}
const styles = {
    container: {
        //flex: 1,
        //justifyContent: 'centre',
        bottom:250
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
