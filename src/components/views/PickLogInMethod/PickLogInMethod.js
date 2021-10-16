import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './PickLogInMethod.module.scss';

const Component = ({ className, children }) => (
  <div className={clsx(className, styles.root)}>
    <div className={clsx(className, styles.overlay)}></div>
    <div className={clsx(className, styles.pickLogin)}>
      <h3>Zaloguj się za pomocą:</h3>
      <div className={clsx(className, styles.buttons)}>
        <a className="loginBtn loginBtn--google" href="/auth/google">
          Login with Google
        </a>
        <br />
        <a className="loginBtn loginBtn--facebook" href="/auth/facebook">
          Login with Facebook
        </a>
      </div>
    </div>
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
  Component as PickLogInMethod,
  // Container as PickLogInMethodContainer,
  Component as PickLogInMethodComponent,
};
