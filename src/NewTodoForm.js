import React, { useContext, useState } from 'react';
import useStyles from './Styles/NewTodoStyles';
import { dispatchContext } from './Contexts/TodosContext';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { DialogContentText } from '@mui/material';

export default function NewTodoForm(props) {
    //hooks
    const classes = useStyles();
    const [title, setTitle] = useState('');
    const [task, setTask] = useState('');
    const dispatch = useContext(dispatchContext);
    const { openNewTodoForm, setOpenNewTodoForm } = props;


    //handlers
    const handleClose = () => {
        setTask('');
        setTitle('');
        setOpenNewTodoForm(false);
    };
    const changeTaskHandler = (e) => {
        setTask(e.target.value);
    }
    const changeTitleHandler = (e) => {
        setTitle(e.target.value);
    }
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch({ type: 'add', task, title });
        handleClose();
    }

    return (
        <div>
            <Dialog open={openNewTodoForm} onClose={handleClose} className={classes.root}>
                <DialogTitle>Add New Task!</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        When you are done with writting the task,
                        Click on Add task button below to 
                        save it!
                    </DialogContentText>
                    <div className={classes.textField}>
                        <TextField
                            autoFocus
                            id="standard-basic"
                            type="text"
                            label="Title"
                            variant="standard"
                            fullWidth
                            value={title}
                            onChange={changeTitleHandler}
                            required
                        />
                    </div>

                    <div className={classes.textField}>
                        <TextField
                            id="standard-basic"
                            type="text"
                            label="Description"
                            variant="standard"
                            fullWidth
                            value={task}
                            onChange={changeTaskHandler}
                            required
                        />
                    </div>

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={submitHandler}>Add Task</Button>
                </DialogActions>
            </Dialog >
        </div>
    );
}