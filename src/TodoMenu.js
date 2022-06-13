import React, { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import SendToMenu from './SendToMenu';
import DeleteDialog from './DeleteDialog';

export default function TodoMenu(props) {
    const { contextMenu, setContextMenu, id } = props;
    const [contextSendToMenu, setContextSendToMenu] = useState(null);
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setContextMenu(null);
    };
    const archiveHandler = () => {
        handleClose();
    }
    const deleteHandler = () => {
        setOpen(true);
        handleClose();
    }
    const sendToHandler = (e) => {
        setContextSendToMenu(
            contextSendToMenu === null
                ? { mouseX: e.clientX + 2, mouseY: e.clientY - 6 }
                : null,
        );
    }

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
                <MenuItem >Send To<span onClick={sendToHandler}>{'->'}</span></MenuItem>
                <MenuItem onClick={deleteHandler}>Delete</MenuItem>
                <MenuItem onClick={archiveHandler}>Archive</MenuItem>
            </Menu>
            <SendToMenu
                id={id}
                contextMenu={contextSendToMenu}
                setContextMenu={setContextSendToMenu}
            />
            <DeleteDialog open={open} setOpen={setOpen} deleteHandler={props.deleteHandler} />
        </>
    );
}
