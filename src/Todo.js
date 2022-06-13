import React, { useContext, memo, useState } from 'react'
import useStyles from './Styles/TodoStyles';
import { dispatchContext } from './Contexts/TodosContext';
import { Box } from '@mui/material';
import TodoMenu from './TodoMenu';

function Todo(props) {
    const classes = useStyles();
    const { task, id, title } = props.todo;
    const dispatch = useContext(dispatchContext);
    const [contextMenu, setContextMenu] = useState(null);
    //position of sendTO

    const clickHandler = (e) => {
        // if (status !== 'todoPane') return;
        e.preventDefault();
        e.stopPropagation();

        setContextMenu(
            contextMenu === null
                ? { mouseX: e.clientX + 2, mouseY: e.clientY - 6 }
                : null,
        );
    }
    const deleteHandler = () => {
        setContextMenu(null);
        dispatch({ type: 'delete', id });
    }

    return (
        <div className={classes.todo} onContextMenu={clickHandler}>
            <Box className={classes.box}>
                <div className={classes.title}>
                    {title}
                </div>
                <div className={classes.task}>
                    {task}
                </div>
            </Box>
            <TodoMenu
                id={id}
                deleteHandler={deleteHandler}
                contextMenu={contextMenu}
                setContextMenu={setContextMenu} />
        </div>

    )
}
export default memo(Todo);