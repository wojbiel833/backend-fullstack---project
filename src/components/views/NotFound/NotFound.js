import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import Link from '@mui/material/Link';
import { styled } from '@mui/material/styles';

import styles from './NotFound.module.scss';

const StyledLink = styled(Link)(({ theme }) => ({
  display: 'flex',
  fontSize: '20px',
  margin: '20px 0',
  width: '100%',
  height: '30px',
  justifyContent: 'center',
  alignItems: 'center',
}));

const Component = ({ className, children }) => (
  <div className={clsx(className, styles.root)}>
    <img
      src="https://i.ibb.co/X3cLzhj/blad-404-1.jpg"
      alt="blad-404-1"
      border="0"
      width="100%"
    />
    <StyledLink className={clsx(className, styles.link)} href="/">
      Wróć do strony głównej
    </StyledLink>
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
  Component as NotFound,
  // Container as NotFoundContainer,
  Component as NotFoundComponent,
};
