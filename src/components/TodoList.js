import React from "react";
import { View, StyleSheet, Text } from "react-native";

import { connect } from "react-redux";

import TodoListItem from "./TodoListItem";

import { toggleTodo, setEditingTodo, deleteTodo } from "../actions/Index";

const TodoList = ({
  todos,
  dispatchToggleTodo,
  dispatchSetEditingTodo,
  dispatchDeleteTodo,
}) => (
  <View style={styles.container}>
    {console.log(todos)}
    {todos.map((todo) => (
      <TodoListItem
        key={todo.id}
        todo={todo}
        onPressTodo={() => dispatchToggleTodo(todo.id)}
        onLongPressTodo={() => dispatchSetEditingTodo(todo)}
      />
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
  },
});

const mapStateToProps = (state) => {
  const { todos } = state;
  return { todos };
};

export default connect(mapStateToProps, {
  dispatchToggleTodo: toggleTodo,
  dispatchSetEditingTodo: setEditingTodo,
  dispatchDeleteTodo: deleteTodo,
})(TodoList);
