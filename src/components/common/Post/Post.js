import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '../Button/Button';

import { faEdit } from '@fortawesome/free-solid-svg-icons';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Post.module.scss';

const Component = ({ className, children }) => (
  <div className={clsx(className, styles.root)}>
    <div className={clsx(className, styles.head)}>
      <h3>Kupie</h3>
      {/* {isLogged ?  */}
      <Button name="Edytyj" icon={faEdit} />
      {/* : ''} */}
    </div>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>

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
  Component as Post,
  // Container as PostContainer,
  Component as PostComponent,
};
