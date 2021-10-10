import React from 'react';
import PropTypes from 'prop-types';

import { YourPostContainer } from '../../common/YourPost/YourPost';
// import { NotFound } from '../../views/NotFound/NotFound';

import clsx from 'clsx';

import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import { styled } from '@mui/material/styles';
import Link from '@mui/material/Link';

import styles from './YourPosts.module.scss';

const StyledLink = styled(Link)(({ theme }) => ({
  position: 'relative',
  fontSize: '20px',
  margin: '20px',
}));

const Component = ({ className, children, email, posts, isLogged }) => {
  return (
    <div className={clsx(className, styles.root)}>
      <div className={clsx(className, styles.announcements)}>
        {/* {isLogged ? ( */}
        {posts.map(post => (
          <YourPostContainer key={post.id} {...post} />
        ))}
        {/* ) : (
          <NotFound />
        )} */}
      </div>
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  email: PropTypes.string,
  posts: PropTypes.array,
  props: PropTypes.any,
  isLogged: PropTypes.bool,
};

const mapStateToProps = state => ({
  posts: state.posts.data,
  isLogged: state.login.loggedIn,
});

const mapDispatchToProps = dispatch => ({
  // someAction: arg => dispatch(reduxActionCreator(arg)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as YourPosts,
  Container as YourPosts,
  Component as YourPostsComponent,
};
