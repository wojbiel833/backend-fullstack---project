import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Icon.module.scss';

const Component = ({ className, children, icon }) => (
  <FontAwesomeIcon className={styles.icon} icon={icon} />
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  icon: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Icon,
  // Container as IconContainer,
  Component as IconComponent,
};
