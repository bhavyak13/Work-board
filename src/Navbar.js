import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SearchBox from './SearchBox';

export default function Navbar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuBookIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1,}}>
                        Work Board
                    </Typography>
                    <SearchBox/>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
