import React from "react";
import { View, StyleSheet, Button, TouchableOpacityBase } from "react-native";
import { connect } from "react-redux";
import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/lib/integration/react";

import { addTodo, setTodoText, updateTodo, deleteTodo } from "../actions/Index";

import Input from "./Input";

class TodoForm extends React.Component {
  onChangeText(text) {
    this.props.dispatchSetTodoText(text);
  }

  onPress() {
    const { todo } = this.props;
    if (todo.id) {
      this.props.dispatchUpdateTodo(todo);
    } else {
      const { text } = this.props.todo;
      this.props.dispatchAddTodo(text);
    }
  }

  onDelete(todo) {
    this.props.dispatchDeleteTodo(todo);
    return;
  }

  render() {
    const { text, id } = this.props.todo;
    return (
      <View>
        <View style={styles.container}>
          <Input
            onChangeText={(text) => this.onChangeText(text)}
            value={text}
          />
        </View>
        <View style={styles.button}>
          <Button
            title={id ? "Editar" : "Criar Tarefa"}
            onPress={() => this.onPress()}
          />
        </View>

        {this.props.todo.id !== null ? (
          <View style={styles.button}>
            <Button
              title="Excluir Tarefa"
              onPress={() => {
                this.onDelete(this.props.todo);
              }}
            />
          </View>
        ) : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
  },
  button: {
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 10,
  },
});

//const mapDispatchToProps = dispatch => {
//  return{
//    dispatchAddTodo: text => dispatch(addTodo(text))
//}
//}

const mapStateToProps = (state) => {
  return {
    todo: state.editingTodo,
  };
};

export default connect(mapStateToProps, {
  dispatchAddTodo: addTodo,
  dispatchSetTodoText: setTodoText,
  dispatchUpdateTodo: updateTodo,
  dispatchDeleteTodo: deleteTodo,
})(TodoForm);
