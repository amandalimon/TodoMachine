import React from 'react';
import { useTodos } from './useTodos'
import { TodoHeader } from '../TodoHeader';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { CreateButton } from '../CreateButton';
import { TodoForm } from '../TodoForm';
import { UserForm } from '../UserForm';
import { Modal } from '../Modal';
import { ChangeAlertWithStorageListener } from '../ChangeAlert';

function App() {
  const {
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    addTodo,
    syncronizedTodos,
    user,
    addUser,
  } = useTodos()

  return (
    <>
      <TodoHeader loading={loading}>
        <TodoCounter
          user={user}
          completedTodos={completedTodos}
          totalTodos={totalTodos}
        />

        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </TodoHeader>

      <TodoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        searchText={searchValue}
        onError={() => <TodosError />}
        onLoading={() => <TodosLoading />}
        onEmptyTodos={() => <EmptyTodos />}
        onEmptySearchResults={
          (searchText) => <p>No hay resultados para {searchText}</p>
        }
        render={todo => (<TodoItem
          key={todo.text}
          text={todo.text}
          completed={todo.completed}
          onComplete={() => completeTodo(todo.text)}
          onDelete={() => deleteTodo(todo.text)}
        />
        )}
      />

      <CreateButton
        setOpenModal={setOpenModal}
      />

      {!loading && !user && openModal && (
        <Modal>
          <UserForm
            setOpenModal={setOpenModal}
            addUser={addUser} />
        </Modal>
      )}

      {user && openModal && (
        <Modal>
          <TodoForm
            setOpenModal={setOpenModal}
            addTodo={addTodo} />
        </Modal>
      )}

      <ChangeAlertWithStorageListener sincronize={syncronizedTodos} />
    </>
  );
}

export default App;