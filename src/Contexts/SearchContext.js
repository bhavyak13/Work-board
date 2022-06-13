import R0eact, { useState, createContext, useContext } from 'react'
import { TodosContext } from './TodosContext'
const SearchContext = createContext();

const SearchProvider = (props) => {
    const [value, setValue] = useState('');
    const { todos } = useContext(TodosContext);
    const searchedTodos = todos.filter(todo => {
        if (todo.title.includes(value)) return todo;
    });

    return (
        <SearchContext.Provider value={{ value, setValue,searchedTodos }}>
            {props.children}
        </SearchContext.Provider>
    )
}
export { SearchProvider, SearchContext };