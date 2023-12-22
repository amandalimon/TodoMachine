import React from 'react';
import { useNavigate } from 'react-router-dom';
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
import { ChangeAlert } from '../../ui/ChangeAlert';

function HomePage() {
    const navigate = useNavigate();
    const { states, stateUpdaters } = useTodos();

    const {
        loading,
        error,
        totalTodos,
        completedTodos,
        searchValue,
        searchedTodos,
    } = states;

    const {
        setSearchValue,
        completeTodo,
        deleteTodo,
        synchronizedTodos,
    } = stateUpdaters;

    return (
        <>
            <TodoHeader loading={loading}>
                <TodoCounter
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
                    key={todo.id}
                    text={todo.text}
                    completed={todo.completed}
                    onEdit={() => {
                        navigate(
                            '/edit/' + todo.id,
                            {
                                state: { todo }
                            }
                        );
                    }}
                    onComplete={() => completeTodo(todo.id)}
                    onDelete={() => deleteTodo(todo.id)}
                />
                )}
            />

            <CreateButton
                onClick={() => navigate('/new')}
            />

            <ChangeAlert sincronize={synchronizedTodos} />
        </>
    );
}

export { HomePage };