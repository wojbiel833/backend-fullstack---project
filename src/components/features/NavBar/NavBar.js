import React from 'react';
import PropTypes from 'prop-types';

// import clsx from 'clsx';

import { connect } from 'react-redux';
import { initialState } from '../../../redux/initialState.js';
import { logIn, createActionLogInOut } from '../../../redux/navbarRedux.js';

import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

// import styles from './NavBar.module.scss';

const StyledNavBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#D4AD76',
}));

function Component(props, state) {
  const { isLogged, logInOut } = props;

  console.log('state:', state);
  console.log('props:', props);
  console.log('isLogged:', isLogged);
  console.log('initialState:', initialState);

  // const [auth, setAuth] = React.useState(true);
  // const [anchorEl, setAnchorEl] = React.useState(null);

  // const handleChange = event => {
  //   setAuth(event.target.checked);
  // };

  // const handleMenu = event => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              // checked={logInOut}
              onChange={isLogged}
              aria-label="login switch"
            />
          }
          label={logInOut ? 'Logout' : 'Login'}
        />
      </FormGroup>
      <StyledNavBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Ogłoszenia
          </Typography>
          {logInOut && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                // onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                // anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                // open={Boolean(anchorEl)}
                // onClose={handleClose}
              >
                {/* <MenuItem onClick={handleClose}>Profile</MenuItem> */}
                {/* <MenuItem onClick={handleClose}>My account</MenuItem> */}
              </Menu>
            </div>
          )}
        </Toolbar>
      </StyledNavBar>
    </Box>
  );
}

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  logInOut: PropTypes.func,
  isLogged: PropTypes.bool,
};

const mapStateToProps = state => ({
  isLogged: state.login,
});

const mapDispatchToProps = dispatch => ({
  logInOut: isLogged => dispatch(createActionLogInOut({ isLogged })),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as NavBar,
  // Container as NavBarContainer,
  Component as NavBarComponent,
};
