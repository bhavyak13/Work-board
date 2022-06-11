import React, { useContext, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { dispatchContext } from './Contexts/TodosContext';

export default function EditFormDialog(props) {
    const { todo } = props;
    const { id, completed, edit } = todo;
    const [task, setTask] = useState(todo.task);
    const dispatch = useContext(dispatchContext);

    //handlers
    const handleClose = () => {
        dispatch({ type: 'toggleEditForm', id })
    };
    const saveEditedTodo = () => {
        handleClose();
        const newTodo = {
            task: task,
            id: id,
            completed: completed,
        }
        dispatch({ type: 'saveEditedTodo', newTodo })
    }
    const changeHandler = (e) => {
        setTask(e.target.value)
    }
    const submitHandler = e => {
        e.preventDefault();
        saveEditedTodo();
    }

    //return
    return (
        <div style={{ minWidth: '250px' }}>
            <Dialog open={edit} onClose={handleClose}>
                <DialogTitle>Edit todo ..</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        You can edit your todo here!
                        Click save to countinue.
                    </DialogContentText>
                    <form onSubmit={submitHandler}>
                        <TextField
                            margin="dense"
                            id="name"
                            label="Todo task"
                            type="text"
                            variant="standard"
                            autoFocus
                            fullWidth
                            value={task}
                            onChange={changeHandler}
                            required
                        />
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={saveEditedTodo}>Save</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}