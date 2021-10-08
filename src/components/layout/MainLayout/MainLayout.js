import React from 'react';
import PropTypes from 'prop-types';

// import { PostContainer } from '../../common/Post/Post';
// import { PostAdd } from '../../views/PostAdd/PostAdd';
// import { PostEdit } from '../../views/PostEdit/PostEdit';

import { HeaderContainer } from '../Header/Header';
// import { HomepageContainer } from '../../views/Homepage/Homepage';
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
      <Container fixed>
        {/* <HomepageContainer /> */}
        {/* <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} /> */}
        {/* <PostContainer /> */}
        {/* <PostAdd /> */}
        {/* <PostEdit />  */}
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
