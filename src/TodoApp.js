import React, { useContext } from 'react'
import { SearchContext } from './Contexts/SearchContext';
import { TodosContext } from './Contexts/TodosContext';
import Navbar from './Navbar';
import TodoList from './TodoList';
import useStyles from './Styles/TodosAppStyles';

function TodoApp() {
    const { status } = useContext(TodosContext);
    const classes = useStyles();
    const { searchedTodos, value } = useContext(SearchContext);
    return (
        <div className={classes.root}>
            <Navbar />
            <h2 hidden={value === ''}>{searchedTodos.length} todo(s) found..</h2>
            <div className={classes.panes}>
                {status.map(e => (
                    <TodoList status={e} key={e} />
                ))}
            </div>
        </div>
    )
}

export default TodoApp;