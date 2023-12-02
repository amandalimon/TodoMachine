import React from 'react';
import { useLocalStorage } from './useLocalStorage';

function useTodos() {
  const {
    item: todos,
    saveItem: saveTodos,
    syncronizedItem: syncronizedTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);

  const {
    item: user,
    saveItem: setUser,
    loading: loadingUser,
  } = useLocalStorage('USER_V1', '')

  const [searchValue, setSearchValue] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false);

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
    const newTodos = [...todos];
    newTodos.push({
      text,
      completed: false,
    });
    saveTodos(newTodos);
  };

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
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
  }

  const stateUpdaters = {
    setSearchValue,
    completeTodo,
    deleteTodo,
    setOpenModal,
    addTodo,
    syncronizedTodos,
    addUser,
  }

  return { states, stateUpdaters };
}

export { useTodos };