import React, { useContext, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import { makeStyles } from '@mui/styles';
import { SearchContext } from './Contexts/SearchContext';

const useStyles = makeStyles({
    box: {
        display: 'flex',
        alignItems: 'flex-end',
        paddingBottom: '0.3rem',
        paddingRight: '0.4rem',
        paddingLeft: '0.4rem',
        borderRadius: '0.6rem',
        backgroundColor: 'white',
    }
})

export default function SearchBox() {
    const { value, setValue } = useContext(SearchContext);
    const changeHandler = (e) => {
        setValue(e.target.value);
    }
    const classes = useStyles();
    return (
        <Box className={classes.box}>
            <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField
                id="input-with-sx"
                label="Search"
                variant="standard"
                value={value}
                onChange={changeHandler}
            />
        </Box>
    );
}