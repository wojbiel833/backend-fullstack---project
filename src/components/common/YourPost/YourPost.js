import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '../Button/Button';

import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faSave } from '@fortawesome/free-solid-svg-icons';

import clsx from 'clsx';
import { getPostsForAnnouncements, editPost } from '../../../redux/postsRedux';

import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import TextField from '@mui/material/TextField';

import styles from './YourPost.module.scss';
import { NotFound } from '../../views/NotFound/NotFound';

class Component extends React.Component {
  render() {
    // console.log(this.props);
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

      editMode,
      edit,
    } = this.props;

    const isUser = email => {
      // console.log(usersEmail, email);
      if (usersEmail === email) return true;
    };

    // console.log(
    //   id,
    //   name,
    //   content,
    //   email,
    //   phone,
    //   localization,
    //   publicationDate,
    //   actualisationDate,
    //   status,
    //   editMode,
    //   edit
    // );
    // console.log(match);
    // console.log(isLogged, isUser(email));

    return (
      <div>
        {(isLogged && isUser(email)) || (isLogged && isAdmin) ? (
          <div className={clsx(className, styles.root)}>
            <div className={clsx(className, styles.content)}>
              <div className={clsx(className, styles.head)}>
                <h3>Ogłoszenie nr {id}</h3>
                {isLogged ? (
                  <div>
                    {isAdmin || isUser(email) ? (
                      <div className={clsx(className, styles.buttons)}>
                        <Button
                          to=""
                          className={clsx(className, styles.button)}
                          name="Edytuj"
                          icon={faEdit}
                          onClick={edit}
                        />
                        <Button
                          to=""
                          className={clsx(className, styles.button)}
                          name="Zapisz"
                          icon={faSave}
                        />
                      </div>
                    ) : (
                      ''
                    )}
                  </div>
                ) : (
                  ''
                )}
              </div>
              <div className={clsx(className, styles.inputs)}>
                <TextField
                  className={clsx(className, styles.input)}
                  // error
                  id="filled-error-helper-text"
                  label="Tytuł ogłoszenia"
                  value={name}
                  variant="filled"
                  fullWidth={true}
                  minLength={10}
                  disabled={!editMode}
                />

                <TextField
                  className={clsx(className, styles.input)}
                  id="outlined-multiline-static"
                  label="Treść ogłoszenia"
                  value={content}
                  multiline
                  rows={8}
                  fullWidth={true}
                  minLength={20}
                  disabled={!editMode}
                />
              </div>
            </div>
            <div className={clsx(className, styles.contact)}>
              <div>
                <div>
                  <h4>E-mail:</h4>
                  <p>{email}</p>
                </div>
              </div>
              <div>
                <TextField
                  className={clsx(className, styles.input)}
                  id="outlined-multiline-static"
                  label="Telefon"
                  rows={1}
                  value={phone}
                  disabled={!editMode}
                />
              </div>
              <div>
                <TextField
                  className={clsx(className, styles.input)}
                  id="outlined-multiline-static"
                  label="Lokalizacja"
                  rows={1}
                  value={localization}
                  disabled={!editMode}
                />
              </div>
            </div>
            <div className={clsx(className, styles.dates)}>
              <div>
                <h4>Data publikacji:</h4>
                <p>{publicationDate}</p>
              </div>
              <div>
                <h4>Status ogłoszenia:</h4>
                <p>Szkic</p>
              </div>
              <div>
                <h4>Data ostatniej aktualizacji:</h4>
                <p>???</p>
              </div>
            </div>
          </div>
        ) : isLogged ? (
          ''
        ) : (
          <NotFound />
        )}
      </div>
    );
  }
}

Component.propTypes = {
  match: PropTypes.any,
  className: PropTypes.string,
  isLogged: PropTypes.bool,
  isAdmin: PropTypes.bool,
  editMode: PropTypes.bool,
  usersEmail: PropTypes.string,
  posts: PropTypes.array,
  id: PropTypes.string,
  name: PropTypes.string,
  content: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  localization: PropTypes.string,
  publicationDate: PropTypes.string,
  edit: PropTypes.func,
};

const mapStateToProps = (state, props) => {
  // console.log(props);

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
    editMode: state.posts.editMode,
    posts: getPostsForAnnouncements(state, id),
  };
};

const mapDispatchToProps = dispatch => ({
  edit: () => dispatch(editPost(true)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as YourPost,
  Container as YourPostContainer,
  Component as YourPostComponent,
};
