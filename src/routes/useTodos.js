import React from 'react';
import { useLocalStorage } from './useLocalStorage';

function useTodos() {
  const {
    item: todos,
    saveItem: saveTodos,
    syncronizedItem: syncronizedTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V2', []);

  const {
    item: user,
    saveItem: setUser,
    loading: loadingUser,
  } = useLocalStorage('USER_V1', '')

  const [searchValue, setSearchValue] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false)

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

  React.useEffect(() => {
    if (!loadingUser && !user) {
      setOpenModal(true);
    }
    return () => { };
  }, [loadingUser, user, setOpenModal]);

  const addUser = (user) => {
    setUser(user)
  }

  const states = {
    loading,
    error,
    totalTodos,
    completedTodos,
    searchValue,
    searchedTodos,
    openModal,
    user,
    getTodo,
  }

  const stateUpdaters = {
    setSearchValue,
    completeTodo,
    deleteTodo,
    setOpenModal,
    addTodo,
    syncronizedTodos,
    addUser,
    editTodo,
  }

  return { states, stateUpdaters };
}

function newTodoId() {
  return Date.now();
}

export { useTodos };