import React, {Component} from 'react';
import {View, Text, Picker, TouchableHighlight, Modal, ScrollView} from 'react-native';
import axios from 'axios';
import {Button} from "./common";
export default class InGame extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Pasirinkimas: '',
            Rodymas: false,
            tikrinimas: false
        }
    }

    setPickerValue(newValue) {
        this.setState ({
            Pasirinkimas: newValue
        })

        this.togglePicker();
    }

    togglePicker() {
        this.setState({
            Rodymas: !this.state.Rodymas
        })
    }

    render() {
        const {container, tablet} = styles;
        const pickerValues = [
            {
                title: 'desimke',
                value: 'desimke'
            },
            {
                title: 'tuzas',
                value: 'tuzas'
            },
            {
                title: 'straitas nuo 9',
                value: 'straitas'
            },
            {
                title: 'straitas nuo 9',
                value: 'straitas'
            },
            {
                title: 'straitas nuo 9',
                value: 'straitas'
            },
            {
                title: 'straitas nuo 9',
                value: 'straitas'
            }
        ]

        return(
            <View style = {container}>
                <Text>
                    Jusu pasirinkimas yra {this.state.Pasirinkimas}
                </Text>
                <Button onPress={() =>this.togglePicker()} title={ "select smthg" }/>
                <Modal visible={this.state.Rodymas} animationType={"slide"} transparent={true}>
                        <View style={tablet}>
                            <Text>Please pick a value</Text>
                            { pickerValues.map((value, index) => {
                                return <TouchableHighlight key={index} onPress={() => this.setPickerValue(value.value)} style={{ paddingTop: 4, paddingBottom: 4 }}>
                                    <Text>{ value.title }</Text>
                                </TouchableHighlight>
                            })}
                            <TouchableHighlight onPress={() => this.togglePicker()} style={{ paddingTop: 4, paddingBottom: 4 }}>
                                <Text style={{ color: '#999' }}>Cancel</Text>
                            </TouchableHighlight>
                    </View>
                </Modal>
            </View>
        );
    }
}
const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    tablet: {
        margin: 20,
        padding: 20,
        backgroundColor: '#efefef',
        bottom: 20,
        left: 20,
        right: 20,
        alignItems: 'center',
        position: 'absolute'
    }
}
export {InGame};