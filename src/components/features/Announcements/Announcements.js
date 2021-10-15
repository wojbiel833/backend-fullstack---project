import React from 'react';
import PropTypes from 'prop-types';

import { PostContainer } from '../../common/Post/Post';
// import { NotFound } from '../../views/NotFound/NotFound';

import clsx from 'clsx';

import { fetchPublished } from '../../../redux/postsRedux';
import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Announcements.module.scss';

class Component extends React.Component {
  // componentDidMount() {
  //   console.log(this.props);
  // const { fetchPublishedPosts } = this.props;
  // fetchPublishedPosts();
  // }
  render() {
    const { className, children, posts, isLogged } = this.props;
    // console.log(posts);

    return (
      <div className={clsx(className, styles.root)}>
        <h2>Najnowsze ogłoszenia</h2>
        <div className={clsx(className, styles.announcements)}>
          {posts.map(post => (
            <PostContainer key={post._id} {...post} />
          ))}
        </div>
      </div>
    );
  }
}

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  posts: PropTypes.array,
  props: PropTypes.any,
  isLogged: PropTypes.bool,
  fetchPublishedPosts: PropTypes.func,
};

const mapStateToProps = state => ({
  posts: state.posts.data.sort((a, b) => a.name.localeCompare(b.name)),
  isLogged: state.login.loggedIn,
});

const mapDispatchToProps = dispatch => ({
  fetchPublishedPosts: dispatch(fetchPublished()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as Announcements,
  Container as Announcements,
  Component as AnnouncementsComponent,
};
