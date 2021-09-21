import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Button.module.scss';

const ColorButton = styled(Button)(({ theme }) => ({
  color: '#FFFFFF',
  backgroundColor: '#1C1C1C',
  '&:hover': {
    backgroundColor: '#545454',
  },
}));

const Component = ({ className, children }) => (
  <div className={clsx(className, styles.root)}>
    <ColorButton>Edytuj</ColorButton>
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
  Component as Button,
  // Container as ButtonContainer,
  Component as ButtonComponent,
};
