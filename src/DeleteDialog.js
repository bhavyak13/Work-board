import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { blue, red } from '@mui/material/colors';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';

function DeleteDialog(props) {
    const { open, setOpen } = props;
    const handleClose = (e) => {
        e.stopPropagation();
        setOpen(false);
    };
    const deleteHandler = (e) => {
        setOpen(false);
        props.deleteHandler();
        e.stopPropagation();
    }

    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle>Delete the task?</DialogTitle>
            <List sx={{ pt: 0 }}>
                <ListItem button onClick={deleteHandler}>
                    <ListItemAvatar>
                        <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                            <DoneIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary='Delete' />
                </ListItem>
                <ListItem button onClick={handleClose}>
                    <ListItemAvatar>
                        <Avatar sx={{ bgcolor: red[100], color: red[600] }}>
                            <CloseIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Cancel" />
                </ListItem>
            </List>
        </Dialog>
    );
}

export default DeleteDialog;