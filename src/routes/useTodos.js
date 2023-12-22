import React from 'react';
import { useLocalStorage } from './useLocalStorage';

function useTodos() {
  const {
    item: todos,
    saveItem: saveTodos,
    synchronizeItem: synchronizedTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V2', []);

  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(
    todo => !!todo.completed
  ).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter((todo) => {
    const todoText = (todo.text || '').toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });

  const addTodo = (text) => {
    const id = newTodoId();
    const newTodos = [...todos];
    newTodos.push({
      id,
      text,
      completed: false,
    });
    saveTodos(newTodos);
  };

  const editTodo = (id, newText) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.id === id
    );
    newTodos[todoIndex].text = newText;
    saveTodos(newTodos);
  };

  const getTodo = (id) => {
    const todoIndex = todos.findIndex(
      (todo) => todo.id === id
    );
    return todos[todoIndex];
  }

  const completeTodo = (id) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.id === id
    );
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (id) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.id === id
    );
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  const states = {
    loading,
    error,
    totalTodos,
    completedTodos,
    searchValue,
    searchedTodos,
    getTodo,
  }

  const stateUpdaters = {
    setSearchValue,
    completeTodo,
    deleteTodo,
    addTodo,
    synchronizedTodos,
    editTodo,
  }

  return { states, stateUpdaters };
}

function newTodoId() {
  return Date.now();
}

export { useTodos };