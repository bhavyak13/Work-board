import React, { useContext, memo } from 'react'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import useStyles from './Styles/TodoStyles';
import { Paper } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import EditFormDialog from './TodoEditFormDailog';
import { dispatchContext } from './Contexts/TodosContext';

function Todo(props) {
    const classes = useStyles();
    const { todo } = props;
    const { task, id, completed } = todo;
    const dispatch = useContext(dispatchContext);

    const deleteHandler = () => {
        dispatch({ type: 'delete', id })
    }
    const toggleHandler = () => {
        dispatch({ type: 'toggleCompletion', id });
    }
    const handleClickOpen = () => {
        dispatch({ type: 'toggleEditForm', id })
    };
    return (
        <div>
            <Paper className={classes.Paper}>
                <FormGroup className={classes.task}>
                    <FormControlLabel
                        label={`${task}`}
                        control={
                            <Checkbox
                                checked={completed}
                                onClick={toggleHandler}
                            />
                        }
                        className={completed ? classes.completed : ''}
                    />
                </FormGroup>
                <div className={classes.btns}>
                    <DeleteIcon className={classes.btn} onClick={deleteHandler} />
                    <div onClick={handleClickOpen} >
                        <EditIcon />
                    </div>
                </div>

            </Paper>
            <EditFormDialog todo={todo} />
        </div>
    )
}
export default memo(Todo);