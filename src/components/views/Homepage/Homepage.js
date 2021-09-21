import React from 'react';
import PropTypes from 'prop-types';

import Link from '@mui/material/Link';

import clsx from 'clsx';

import { styled } from '@mui/material/styles';

import { Post } from '../../common/Post/Post';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Homepage.module.scss';

const StyledLink = styled(Link)(({ theme }) => ({
  fontSize: '20px',
  margin: '20px',
}));

const Component = ({ className, children }) => (
  <div className={clsx(className, styles.root)}>
    <StyledLink href="#">Dodaj nowe ogłoszenie</StyledLink>
    <Post />
    {children}
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Homepage,
  // Container as HomepageContainer,
  Component as HomepageComponent,
};
