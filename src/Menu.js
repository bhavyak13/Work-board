import React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function ContextMenu(props) {
    const { contextMenu, setContextMenu } = props;

    const handleClose = () => {
        setContextMenu(null);
    };
    const clickHandler=()=>{
        props.setOpen(true);
        handleClose();
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
                <MenuItem onClick={clickHandler}>New Task</MenuItem>
            </Menu>
        </>
    );
}
