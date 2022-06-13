import React, { useContext, useState } from 'react'
import { SearchContext } from './Contexts/SearchContext';

import Todo from './Todo';
import ContextMenu from './Menu';
import NewTodoForm from './NewTodoForm'
import useStyles from './Styles/TodoList';

const TodoList = (props) => {

    const classes = useStyles(props);

    const [openNewTodoForm, setOpenNewTodoForm] = useState(false);
    const [contextMenu, setContextMenu] = useState(null);

    const { status } = props;

    const { searchedTodos, value } = useContext(SearchContext);
    const newTodos = searchedTodos.filter(todo => (todo.status === status));

    //for handling right click event, contextMenu is used!
    const rightClickHandler = (e) => {
        if (status !== 'todoPane') return;
        e.preventDefault();
        setContextMenu(
            contextMenu === null
                ? { mouseX: e.clientX + 2, mouseY: e.clientY - 6 }
                : null,
        );
    }

    return (
        <>
            <div className={classes.root} onContextMenu={rightClickHandler} style={{ cursor: 'context-menu' }}>
                <h1 className={classes.title}>{status}</h1>
                <div className={classes.todos}>
                    {newTodos.map(todo => (
                        <Todo
                            key={todo.id}
                            todo={todo}
                        />
                    ))}
                </div>
                <ContextMenu
                    contextMenu={contextMenu}
                    setContextMenu={setContextMenu}
                    setOpen={setOpenNewTodoForm}
                />
                <NewTodoForm
                    openNewTodoForm={openNewTodoForm}
                    setOpenNewTodoForm={setOpenNewTodoForm}
                />
            </div>
        </>
    )
}
export default TodoList;