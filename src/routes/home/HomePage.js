import React from 'react';
import { useTodos } from '../useTodos'
import { TodoHeader } from '../../ui/TodoHeader';
import { TodoCounter } from '../../ui/TodoCounter';
import { TodoSearch } from '../../ui/TodoSearch';
import { TodoList } from '../../ui/TodoList';
import { TodoItem } from '../../ui/TodoItem';
import { TodosLoading } from '../../ui/TodosLoading';
import { TodosError } from '../../ui/TodosError';
import { EmptyTodos } from '../../ui/EmptyTodos';
import { CreateButton } from '../../ui/CreateButton';
import { TodoForm } from '../../ui/TodoForm';
import { UserForm } from '../../ui/UserForm';
import { Modal } from '../../ui/Modal';
import { ChangeAlertWithStorageListener } from '../../ui/ChangeAlert';

function HomePage() {
    const { states, stateUpdaters } = useTodos();

    const {
        loading,
        error,
        totalTodos,
        completedTodos,
        searchValue,
        searchedTodos,
        openModal,
        user,
    } = states;

    const {
        setSearchValue,
        completeTodo,
        deleteTodo,
        setOpenModal,
        addTodo,
        syncronizedTodos,
        addUser,
    } = stateUpdaters;

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

export { HomePage };