import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
// import {
//   reduxSelector,
//   reduxActionCreator,
// } from '../../../redux/exampleRedux.js';

import styles from './Header.module.scss';

const Component = ({ className, children, isLogged }) => {
  // const { isLogged } = props;

  return (
    <div className={clsx(className, styles.root)}>
      <img
        className={clsx(className, styles.image)}
        src="https://i.ibb.co/Fg1FQ8Q/ogloszenia-zolte-drobne-polacy-we-wloszech-1-1.jpg"
        alt="header-pic"
        border="0"
      />
      <div className={styles.overlay}></div>
      <div className={styles.text}>
        <a
          href="#"
          // onCLick={isLogged()}
        >
          {isLogged ? 'Twoje ogłoszenia' : 'Zaloguj się'}
        </a>
      </div>
      {children}
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  props: PropTypes.node,
  className: PropTypes.string,
  isLogged: PropTypes.bool,
};

const mapStateToProps = state => ({
  isLogged: state.login.loggedIn,
});

const mapDispatchToProps = dispatch => ({
  // someAction: arg => dispatch(reduxActionCreator(arg)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Header,
  Container as HeaderContainer,
  Component as HeaderComponent,
};
