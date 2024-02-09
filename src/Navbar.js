import {
  AppBar,
  IconButton,
  InputAdornment,
  TextField,
  Toolbar,
  Typography,
} from '@mui/material';
import React from 'react';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {
  return (
    <div>
      <AppBar position='absolute' color='transparent' variant='outlined'>
        <Toolbar>
          <Typography
            variant='h6'
            noWrap
            component='a'
            href='#app-bar-with-responsive-menu'
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <CheckBoxIcon />
            FINDPRO
          </Typography>
          <TextField
            placeholder='Search jobs globally...'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
