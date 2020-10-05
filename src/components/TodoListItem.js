import React from 'react';
import {View, StyleSheet , Text, TouchableOpacity, TouchableOpacityBase} from 'react-native';


const TodoListItem = ({todo , onPressTodo , onLongPressTodo}) => (
    <TouchableOpacity  
    onPress = {onPressTodo}
    onLongPress={onLongPressTodo}
    >
        <View style={[
            styles.line,
            todo.done ? styles.lineThough : null
            ]}>
            <Text style={[
                styles.lineText,
                todo.done ? styles.lineThough : null
                ]}>
                {todo.text}
            </Text>
        </View>
    </TouchableOpacity>

);

const styles = StyleSheet.create({
    line:{
        backgroundColor: "transparent",
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: "red",

        alignItems: "center",
        flexDirection: 'row',
        justifyContent: "center"
    },
    lineText:{
        backgroundColor: "transparent",
        fontSize: 20,
        paddingLeft: 5,
        flex: 7,
        
    },
    lineThough:{
        textDecorationLine: 'line-through',
        backgroundColor: "green",
        borderBottomColor: "green",
    }
});

export default TodoListItem;