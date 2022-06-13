import React, { createContext } from 'react'
import TodoReducer from '../TodoReducers/TodoReducer';
import useLocalStorageReducer from '../Hooks/useLocalStorageReducer';
import { SearchProvider } from './SearchContext';

const TodosContext = createContext();
const dispatchContext = createContext();


const TodosProvider = (props) => {
    const status = ['Todos', 'In Progress', 'Done'];
    const initialTodos = [
        { id: '1', title: 'task1', task: 'get some water to plants', edit: false, status: 'Todos' },
        { id: '2', title: 'title', task: 'Go to temple', edit: false, status: 'In Progress' },
        { id: '3', title: 'this is title', task: 'swimming', edit: false, status: 'Done' },
    ]
    const [todos, dispatch] = useLocalStorageReducer(TodoReducer, initialTodos, 'todos');

    return (
        <TodosContext.Provider value={{ todos, status }}>
            <dispatchContext.Provider value={dispatch}>
                <SearchProvider>
                    {props.children}
                </SearchProvider>
            </dispatchContext.Provider>
        </TodosContext.Provider>
    )
}
export { TodosContext, TodosProvider, dispatchContext }