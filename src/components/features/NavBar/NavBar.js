import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import {
  createActionLogIn,
  createActionLogOut,
  createActionLogInAdmin,
  createActionLogOutAdmin,
} from '../../../redux/navbarRedux.js';

import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import Menu from '@mui/material/Menu';
import { Container as NavContainer } from '@mui/material';

const StyledNavBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#D4AD76',
}));

const StyledFormGroup = styled(FormGroup)(({ theme }) => ({
  flexDirection: 'row',
  display: 'inline-flex',
}));

function Component(props) {
  const { isLogged, isAdmin, logIn, logOut, logInAdmin, logOutAdmin } = props;

  const [anchorEl] = React.useState(null);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <StyledFormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={isLogged}
              onChange={isLogged ? logOut : logIn}
              aria-label="login switch"
            />
          }
          label={isLogged ? 'Logout' : 'Login'}
        />
        <FormControlLabel
          value="admin"
          onChange={isAdmin ? logOutAdmin : logInAdmin}
          control={<Checkbox />}
          label="Admin"
          labelPlacement="end"
        />
      </StyledFormGroup>
      <StyledNavBar position="static">
        <NavContainer maxWidth="lg">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <IconButton
                size="small"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                href="/"
              >
                Strona główna
              </IconButton>
            </Typography>
            {isLogged && (
              <div>
                <IconButton
                  size="small"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={logOut}
                  color="inherit"
                >
                  Wyloguj się
                </IconButton>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorEl)}
                ></Menu>
              </div>
            )}
          </Toolbar>
        </NavContainer>
      </StyledNavBar>
    </Box>
  );
}

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  isLogged: PropTypes.bool,
  logIn: PropTypes.func,
  logOut: PropTypes.func,
  isAdmin: PropTypes.bool,
  logInAdmin: PropTypes.func,
  logOutAdmin: PropTypes.func,
};

const mapStateToProps = state => ({
  isLogged: state.login.loggedIn,
  isAdmin: state.login.admin,
});

const mapDispatchToProps = dispatch => ({
  logIn: () => dispatch(createActionLogIn(true)),
  logOut: () => dispatch(createActionLogOut(false)),
  logInAdmin: () => dispatch(createActionLogInAdmin(true)),
  logOutAdmin: () => dispatch(createActionLogOutAdmin(false)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as NavBar,
  Container as NavBarContainer,
  Component as NavBarComponent,
};
