import { makeStyles } from '@mui/styles';
import React, { useContext } from 'react'
import { SearchContext } from './Contexts/SearchContext';
import { TodosContext } from './Contexts/TodosContext';
import Navbar from './Navbar';
import TodoList from './TodoList';

const useStyles=makeStyles({
    panes:{
        display:'flex',
        justifyContent:'space-evenly',
        alignItems:'flex-start',
        height:'100%'
    }
})

function TodoApp() {
    const { status } = useContext(TodosContext);
    const classes=useStyles();
    const { searchedTodos, value } = useContext(SearchContext);
    return (
        <div style={{height:'100%'}}>
            <Navbar />
            <h2 hidden={value===''}>{searchedTodos.length} todo(s) found..</h2>
            <div className={classes.panes}>
                {status.map(e => (
                    <TodoList status={e} key={e} />
                ))}
            </div>
        </div>
    )
}

export default TodoApp;