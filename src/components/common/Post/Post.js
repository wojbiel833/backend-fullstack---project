import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '../Button/Button';

import { faEdit } from '@fortawesome/free-solid-svg-icons';

import clsx from 'clsx';

import {
  getPostsForAnnouncements,
  fetchPublished,
} from '../../../redux/postsRedux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Post.module.scss';

class Component extends React.Component {
  componentDidMount() {
    console.log(this.props);
    const { fetchPublishedPosts } = this.props;
    // fetchPublishedPosts();
  }

  render() {
    const {
      className,
      isLogged,
      isAdmin,
      usersEmail,
      id,
      name,
      content,
      email,
      phone,
      localization,
      publicationDate,
      actualisationDate,
      status,
      match,
    } = this.props;
    console.log(this.props);

    const isUser = email => {
      // console.log(usersEmail, email);
      if (usersEmail === email) return true;
    };

    let pageUrl = '';
    if (match) {
      pageUrl = match.url;
    }
    // console.log(
    //   id,
    //   name,
    //   content,
    //   email,
    //   phone,
    //   localization,
    //   publicationDate,
    //   actualisationDate,
    //   status
    // );
    // console.log(match.url);

    return (
      <div className={clsx(className, styles.root)}>
        <div className={clsx(className, styles.content)}>
          <div className={clsx(className, styles.head)}>
            <h3>{name}</h3>
            {isLogged ? (
              <div className={clsx(className, styles.buttons)}>
                {pageUrl === `/post/${id}` ? (
                  ''
                ) : (
                  <Link to={`/post/${id}`} className={styles.link}>
                    Przejdż do ogłoszenia
                  </Link>
                )}
                {isAdmin || isUser(email) ? (
                  <Button to={`/post/${id}/edit`} name="Edytuj" icon={faEdit} />
                ) : (
                  ''
                )}
              </div>
            ) : (
              ''
            )}
          </div>
          <p className={clsx(className, styles.text)}>{content}</p>
        </div>
        <div className={clsx(className, styles.contact)}>
          <div>
            <h4>E-mail:</h4>
            <p>{email}</p>
          </div>
          <div>
            <h4>Telefon:</h4>
            <p>{phone}</p>
          </div>
          <div>
            <h4>Lokalizacja:</h4>
            <p>{localization}</p>
          </div>
        </div>
        <div className={clsx(className, styles.dates)}>
          <div>
            <h4>Data publikacji:</h4>
            <p>{publicationDate}</p>
          </div>
          <div>
            <h4>Status ogłoszenia:</h4>
            <p>{status}</p>
          </div>
          <div>
            <h4>Data ostatniej aktualizacji:</h4>
            <p>{actualisationDate}</p>
          </div>
        </div>
      </div>
    );
  }
}

Component.propTypes = {
  match: PropTypes.any,
  className: PropTypes.string,
  isLogged: PropTypes.bool,
  isAdmin: PropTypes.bool,
  usersEmail: PropTypes.string,
  posts: PropTypes.array,
  id: PropTypes.string,
  name: PropTypes.string,
  content: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  localization: PropTypes.string,
  publicationDate: PropTypes.string,
  actualisationDate: PropTypes.string,
  status: PropTypes.string,
  fetchPublishedPosts: PropTypes.func,
};

const mapStateToProps = (state, props) => {
  let postParams = {};
  let id;

  if (props.match) {
    id = props.match.params.id;
    const filteredPosts = state.posts.data.filter(post => post.id === id);
    postParams = filteredPosts[0] || {};
  }

  return {
    ...postParams,
    isLogged: state.login.loggedIn,
    isAdmin: state.login.admin,
    usersEmail: state.login.email,
    posts: getPostsForAnnouncements(state, id),
  };
};

const mapDispatchToProps = dispatch => ({
  fetchPublishedPosts: dispatch(fetchPublished()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as Post,
  Container as PostContainer,
  Component as PostComponent,
};
