import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { Announcements } from '../../features/Announcements/Announcements';

import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import Link from '@mui/material/Link';
import { styled } from '@mui/material/styles';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import styles from './Homepage.module.scss';
import { YourPosts } from '../YourPosts/YourPosts';

const StyledLink = styled(Link)(({ theme }) => ({
  position: 'relative',
  fontSize: '20px',
  margin: '20px',
}));

const Component = ({ className, children, isLogged }) => (
  <div className={clsx(className, styles.root)}>
    {isLogged ? (
      <div>
        <h4 className={clsx(className, styles.postAdd)}>
          <StyledLink href="/post/add">
            <AddCircleOutlineIcon className={clsx(className, styles.icon)} />
            <p>Dodaj nowe ogłoszenie</p>
          </StyledLink>
        </h4>
        <YourPosts />
        <Announcements>{children}</Announcements>
      </div>
    ) : (
      <div>
        {isLogged ? <YourPosts /> : ''}
        <Announcements>{children}</Announcements>
      </div>
    )}
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
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
  // Component as Homepage,
  Container as Homepage,
  Component as HomepageComponent,
};
