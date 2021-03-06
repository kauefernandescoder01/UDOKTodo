import React from "react";
import { View, StyleSheet } from "react-native";
import { createStore } from "redux";
import { Provider } from "react-redux";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

import rootReducer from "./reducers/Index";
import devToolsEnhancer from "remote-redux-devtools";

const store = createStore(rootReducer, devToolsEnhancer());

export default class TodoApp extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={style.container}>
          <TodoForm />
          <TodoList />
        </View>
      </Provider>
    );
  }
}

const style = StyleSheet.create({
  container: {
    paddingTop: 15,
  },
});
