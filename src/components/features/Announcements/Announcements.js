import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { PostContainer } from '../../common/Post/Post';

// import { fetchPublished } from '../../../redux/postsRedux';
import { connect } from 'react-redux';

import styles from './Announcements.module.scss';

class Component extends React.Component {
  // componentDidMount() {
  //   const { fetchPublishedPosts } = this.props;
  //   fetchPublishedPosts();
  // }

  render() {
    const { className, posts } = this.props;

    return (
      <div className={clsx(className, styles.root)}>
        <h2>Najnowsze ogłoszenia</h2>
        <div className={clsx(className, styles.announcements)}>
          {posts.map(post => (
            <PostContainer className="Post" key={post.id} {...post} />
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

// const mapDispatchToProps = dispatch => ({
//   fetchPublishedPosts: () => dispatch(fetchPublished()),
// });

const Container = connect(mapStateToProps, null)(Component);

export { Container as Announcements, Component as AnnouncementsComponent };
