import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { YourPostContainer } from '../../common/YourPost/YourPost';
import { NotFound } from '../../views/NotFound/NotFound';

import { fetchPublished } from '../../../redux/postsRedux';
import { connect } from 'react-redux';

import styles from './YourPosts.module.scss';

const Component = ({ className, children, email, posts, isLogged }) => {
  return (
    <div>
      {isLogged ? (
        <div className={clsx(className, styles.root)}>
          <div className={clsx(className, styles.announcements)}>
            <h2>Twoje ogłoszenia</h2>
            {posts.email === 'undefined' || !email ? (
              posts.map(post => (
                <YourPostContainer
                  className="YourPost"
                  key={post.id}
                  {...post}
                />
              ))
            ) : (
              <div>Twoje ogłoszenia są puste.</div>
            )}
          </div>
        </div>
      ) : (
        <NotFound className="NotFound" />
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
  fetchPublishedPosts: PropTypes.func,
};

const mapStateToProps = state => ({
  posts: state.posts.data,
  isLogged: state.login.loggedIn,
});

const mapDispatchToProps = dispatch => ({
  fetchPublishedPosts: dispatch(fetchPublished()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export { Container as YourPostsContainer, Component as YourPostsComponent };
