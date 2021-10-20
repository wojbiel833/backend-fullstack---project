import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { HeaderContainer } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { NavBarContainer } from '../../features/NavBar/NavBar';

import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import styles from './MainLayout.module.scss';

const Component = ({ className, children }) => (
  <div className={clsx(className, styles.root)}>
    <NavBarContainer />
    <HeaderContainer />
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" fixed>
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

export { Component as MainLayout, Component as MainLayoutComponent };
