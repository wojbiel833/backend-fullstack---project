import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { YourPostsContainer } from '../YourPosts/YourPosts';
import { Announcements } from '../../features/Announcements/Announcements';

import { connect } from 'react-redux';

import Link from '@mui/material/Link';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { styled } from '@mui/material/styles';
import styles from './Homepage.module.scss';

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
        <YourPostsContainer className="YourPosts" />
        <Announcements className="Announcements">{children}</Announcements>
      </div>
    ) : (
      <div>
        {isLogged ? <YourPostsContainer className="YourPosts" /> : ''}
        <Announcements className="Announcements">{children}</Announcements>
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

const Container = connect(mapStateToProps, null)(Component);

export { Container as Homepage, Component as HomepageComponent };
