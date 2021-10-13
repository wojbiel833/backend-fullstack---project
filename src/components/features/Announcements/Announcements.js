import React from 'react';
import PropTypes from 'prop-types';

import { PostContainer } from '../../common/Post/Post';
// import { NotFound } from '../../views/NotFound/NotFound';

import clsx from 'clsx';

import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Announcements.module.scss';

const Component = ({ className, children, posts, isLogged }) => {
  // console.log(posts);
  return (
    <div className={clsx(className, styles.root)}>
      <h2>Najnowsze ogłoszenia</h2>
      <div className={clsx(className, styles.announcements)}>
        {posts.map(post => (
          <PostContainer key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  posts: PropTypes.array,
  props: PropTypes.any,
  isLogged: PropTypes.bool,
};

const mapStateToProps = state => ({
  posts: state.posts.data.sort((a, b) => a.name.localeCompare(b.name)),
  isLogged: state.login.loggedIn,
});

const mapDispatchToProps = dispatch => ({
  // someAction: arg => dispatch(reduxActionCreator(arg)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as Announcements,
  Container as Announcements,
  Component as AnnouncementsComponent,
};
