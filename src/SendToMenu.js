import React, { useContext } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { dispatchContext, TodosContext } from './Contexts/TodosContext';
import useStyles from './Styles/SendToMenuStyles';

export default function SendToMenu(props) {
    const classes=useStyles();
    const { contextMenu, setContextMenu, id } = props;
    const { status, todos } = useContext(TodosContext);
    const dispatch = useContext(dispatchContext);

    const handleClose = () => {
        setContextMenu(null);
    };
    const clickHandler = (e) => {
        dispatch({ type: 'statusChange', status: e.target.id, id });
        handleClose();
    }
    const currentTodo = todos.filter(t => t.id === id);

    return (
        <>
            <Menu
                open={contextMenu !== null}
                onClose={handleClose}
                anchorReference="anchorPosition"
                anchorPosition={
                    contextMenu !== null
                        ? { top: contextMenu.mouseY, left: contextMenu.mouseX }
                        : undefined
                }
            >
                {status.map(s => (
                    <MenuItem key={s} onClick={clickHandler} id={s}>
                        <button
                            disabled={(s === currentTodo[0].status) ? true : false}
                            id={s}
                            className={classes.bttn}
                        >
                            {s}
                        </button>
                    </MenuItem>
                ))}
            </Menu>
        </>
    );
}