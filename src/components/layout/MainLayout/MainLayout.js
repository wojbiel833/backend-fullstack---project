import React from 'react';
import PropTypes from 'prop-types';

import { HeaderContainer } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { NavBarContainer } from '../../features/NavBar/NavBar';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import CssBaseline from '@mui/material/CssBaseline';
// import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import styles from './MainLayout.module.scss';

const Component = ({ className, children }) => (
  <div className={clsx(className, styles.root)}>
    <NavBarContainer />
    <HeaderContainer />
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" fixed>
        {/* <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} /> */}
        {children}
      </Container>
    </React.Fragment>
    <Footer />
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  props: PropTypes.any,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as MainLayout,
  // Container as MainLayoutContainer,
  Component as MainLayoutComponent,
};
