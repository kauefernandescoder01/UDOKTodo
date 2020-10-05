import React from 'react';
import {View, TextInput , StyleSheet} from 'react-native';

const Input = ({ onChangeText,value}) => (
    <TextInput
        style={styles.input}
        onChangeText = {onChangeText}
        value= {value}
        underlineColorAndroid = "red"
    />
)

const styles = StyleSheet.create({
    input:{
        paddingBottom: 10,
        paddingLeft: 5 ,
        paddingRight: 5,
        fontSize: 20
    }
})


export default Input;