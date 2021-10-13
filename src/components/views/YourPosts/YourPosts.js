import React from 'react';
import PropTypes from 'prop-types';

import { YourPostContainer } from '../../common/YourPost/YourPost';
import { NotFound } from '../../views/NotFound/NotFound';

import clsx from 'clsx';

import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './YourPosts.module.scss';

const Component = ({ className, children, email, posts, isLogged }) => {
  return (
    // isUser
    <div>
      {isLogged ? (
        <div className={clsx(className, styles.root)}>
          <div className={clsx(className, styles.announcements)}>
            <h2>Twoje ogłoszenia</h2>
            {posts.email === 'undefined' || !email ? (
              posts.map(post => <YourPostContainer key={post.id} {...post} />)
            ) : (
              <div>Twoje ogłoszenia są puste.</div>
            )}
          </div>
        </div>
      ) : (
        <NotFound />
      )}
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  email: PropTypes.string,
  usersEmail: PropTypes.string,
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
  Container as YourPostsContainer,
  Component as YourPostsComponent,
};
