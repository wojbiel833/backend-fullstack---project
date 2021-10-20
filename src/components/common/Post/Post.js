import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { Button } from '../Button/Button';

import { getPostsForAnnouncements } from '../../../redux/postsRedux';

import { faEdit } from '@fortawesome/free-solid-svg-icons';
import styles from './Post.module.scss';

class Component extends React.Component {
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

    const isUser = email => {
      if (usersEmail === email) return true;
    };

    let pageUrl = '';
    if (match) {
      pageUrl = match.url;
    }

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
                  <Button
                    className="Button"
                    to={`/post/${id}/edit`}
                    name="Edytuj"
                    icon={faEdit}
                  />
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

const Container = connect(mapStateToProps, null)(Component);

export { Container as PostContainer, Component as PostComponent };
