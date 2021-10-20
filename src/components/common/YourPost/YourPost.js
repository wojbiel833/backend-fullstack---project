import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '../Button/Button';
import { NotFound } from '../../views/NotFound/NotFound';
import { formatDate } from '../../utils/formatDate';

import clsx from 'clsx';
import {
  getPostsForAnnouncements,
  editPost,
  updatePostRequest,
} from '../../../redux/postsRedux';

import { connect } from 'react-redux';

import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import TextField from '@mui/material/TextField';
import styles from './YourPost.module.scss';

class Component extends React.Component {
  state = {
    post: { name: '', content: '', email: '', localization: '' },
    error: null,
  };

  setPostParam = (name, value) => {
    this.setState({
      ...this.state,
      post: { ...this.state.post, [name]: value },
    });
  };

  submitForm = e => {
    e.preventDefault();

    const { post } = this.state;

    let error = null;

    if (!post.name || !post.content || !post.email || !post.localization)
      error = 'Musisz wypełnić wymagane pola oznaczone gwiazdką';

    if (post.name.length <= 10) error = 'Tytuł jest za krótki (min. 10 znaków)';
    if (post.content.length <= 20)
      error = 'Tytuł jest za krótki (min. 20 znaków)';
    if (!post.email.includes('@')) error = 'Zły format adresu e-mail';
    if (post.localization.length <= 3)
      error = 'Nazwa lokalizacji jest za krótka (min. 3 znaki)';

    if (!error) {
      const formData = new FormData();

      for (let key of ['name', 'content', 'email', 'phone', 'localization']) {
        formData.append(key, this.state[key]);
      }

      this.props.updatePost(formData);
      this.setState({ error: null });
      console.log('udało się', formData);
    } else {
      this.setState({ error });

      console.log('nie udało się');
    }
  };

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
      editMode,
      editStart,
      editStop,
    } = this.props;

    const { submitForm } = this;

    const isUser = email => {
      if (usersEmail === email) return true;
    };

    return (
      <div>
        {(isLogged && isUser(email)) || (isLogged && isAdmin) ? (
          <form className={clsx(className, styles.root)} onSubmit={submitForm}>
            <div className={clsx(className, styles.content)}>
              <div className={clsx(className, styles.head)}>
                <h3>Ogłoszenie nr {id}</h3>
                {isLogged ? (
                  <div>
                    {isAdmin || isUser(email) ? (
                      <div className={clsx(className, styles.buttons)}>
                        {!editMode ? (
                          <Button
                            to={`/post/${id}/edit`}
                            className={clsx(className, styles.button)}
                            name="Edytuj"
                            icon={faEdit}
                            onClick={editStart}
                          />
                        ) : (
                          <Button
                            to=""
                            className={clsx(className, styles.button)}
                            name="Zapisz"
                            icon={faSave}
                            onClick={editStop}
                            type="submit"
                          />
                        )}
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
                  id="filled-error-helper-text"
                  label="Tytuł ogłoszenia*"
                  variant="filled"
                  fullWidth={true}
                  minLength={10}
                  disabled={!editMode}
                  value={!editMode ? name : this.state.post.name}
                  onChange={e => this.setPostParam('name', e.target.value)}
                  placeholder={name}
                />

                <TextField
                  className={clsx(className, styles.input)}
                  id="outlined-multiline-static"
                  label="Treść ogłoszenia*"
                  multiline
                  rows={8}
                  fullWidth={true}
                  minLength={20}
                  disabled={!editMode}
                  value={!editMode ? content : this.state.post.content}
                  onChange={e => this.setPostParam('content', e.target.value)}
                  placeholder={content}
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
                  disabled={!editMode}
                  value={!editMode ? phone : this.state.post.phone}
                  onChange={e => this.setPostParam('phone', e.target.value)}
                  placeholder={phone}
                />
              </div>
              <div>
                <TextField
                  className={clsx(className, styles.input)}
                  id="outlined-multiline-static"
                  label="Lokalizacja*"
                  rows={1}
                  disabled={!editMode}
                  value={
                    !editMode ? localization : this.state.post.localization
                  }
                  onChange={e =>
                    this.setPostParam('localization', e.target.value)
                  }
                  placeholder={localization}
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
                <p>{!editMode ? 'Opuiblikowane' : 'Szkic'}</p>
              </div>
              <div>
                <h4>Data ostatniej aktualizacji:</h4>
                <p>{!editMode ? '???' : formatDate(new Date())}</p>
              </div>
            </div>
            <p className={clsx(className, styles.arsrterisk)}>
              * Pola oznaczone gwiazdką są wymagane!
            </p>
          </form>
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
  editStart: PropTypes.func,
  editStop: PropTypes.func,
  updatePost: PropTypes.func,
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
    editMode: state.posts.editMode,
    posts: getPostsForAnnouncements(state, id),
  };
};

const mapDispatchToProps = dispatch => ({
  editStart: () => dispatch(editPost(true)),
  editStop: () => dispatch(editPost(false)),
  updatePost: data => dispatch(updatePostRequest(data)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export { Container as YourPostContainer, Component as YourPostComponent };
