import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import shortId from 'shortid';

import { Button } from '../../common/Button/Button';
import { NotFound } from '../NotFound/NotFound';
import { formatDate } from '../../utils/formatDate';

import { connect } from 'react-redux';
import {
  addPostRequest,
  getRequest,
  ADD_POST,
} from '../../../redux/postsRedux';
import { fetchPublished } from '../../../redux/postsRedux';

import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import TextField from '@mui/material/TextField';
import styles from './PostAdd.module.scss';

class Component extends React.Component {
  state = {
    post: { name: '', content: '', email: '', phone: '', localization: '' },
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

    try {
      const { post } = this.state;
      const { posts } = this.props;
      console.log(post);
      console.log(posts);

      let error = null;

      if (!post.name || !post.content || !post.email || !post.localization)
        error = 'Musisz wypełnić wymagane pola oznaczone gwiazdką';

      if (post.name.length <= 10)
        error = 'Tytuł jest za krótki (min. 10 znaków)';
      if (post.content.length <= 20)
        error = 'Treść jest za krótka (min. 20 znaków)';
      if (!post.email.includes('@')) error = 'Zły format adresu e-mail';
      if (!post.localization) error = 'Musisz podać lokalizację!';

      if (error === null) {
        let formData = {
          id: shortId.generate(),
          name: post.name,
          content: post.content,
          email: post.email,
          phone: post.phone,
          localization: post.localization,
        };

        console.log(formData);

        this.props.addPost(formData);
        this.props.fetchPublishedPosts();
        this.setState({ error: null });
        console.log('udało się', formData);
      } else {
        this.setState({ error });

        console.log('nie udało się', error);
      }
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const { className, isLogged, actualisationDate, publicationDate } =
      this.props;
    const { submitForm } = this;
    return (
      <div>
        {isLogged ? (
          <form
            className={clsx(className, styles.root)}
            id="formElem"
            onSubmit={submitForm}
          >
            <div className={clsx(className, styles.content)}>
              <div className={clsx(className, styles.head)}>
                <h3>Nowe ogłoszenie</h3>
                <Button
                  className="Button"
                  name="Dodaj ogłoszenie"
                  icon={faPlusCircle}
                  type="submit"
                  to=""
                  onClick={submitForm}
                />
              </div>
              <div className={clsx(className, styles.inputs)}>
                <TextField
                  className={clsx(className, styles.input)}
                  id="filled-error-helper-text"
                  label="Tytuł ogłoszenia*"
                  placeholder="Tytuł ogłoszenia"
                  variant="filled"
                  fullWidth={true}
                  minLength={10}
                  name="name"
                  type="name"
                  value={this.state.post.name}
                  onChange={e => this.setPostParam('name', e.target.value)}
                />

                <TextField
                  className={clsx(className, styles.input)}
                  id="outlined-multiline-static"
                  label="Treść ogłoszenia*"
                  multiline
                  rows={8}
                  placeholder="Kupie/Sprzedam/Zamienię/Wynajmę..."
                  fullWidth={true}
                  minLength={20}
                  name="content"
                  type="content"
                  value={this.state.post.content}
                  onChange={e => this.setPostParam('content', e.target.value)}
                />
              </div>
            </div>
            <div className={clsx(className, styles.contact)}>
              <div>
                <TextField
                  className={clsx(className, styles.input)}
                  id="outlined-multiline-static"
                  label="E-mail*"
                  rows={1}
                  placeholder="example@gmail.com"
                  name="email"
                  type="email"
                  value={this.state.post.email}
                  onChange={e => this.setPostParam('email', e.target.value)}
                />
              </div>
              <div>
                <TextField
                  className={clsx(className, styles.input)}
                  id="outlined-multiline-static"
                  label="Telefon"
                  rows={1}
                  placeholder="0 700 880 774"
                  name="phone"
                  type="phone"
                  value={this.state.post.phone}
                  onChange={e => this.setPostParam('phone', e.target.value)}
                />
              </div>
              <div>
                <TextField
                  className={clsx(className, styles.input)}
                  id="outlined-multiline-static"
                  label="Lokalizacja*"
                  rows={1}
                  placeholder="Warszawa"
                  name="localization"
                  type="localization"
                  value={this.state.post.localization}
                  onChange={e =>
                    this.setPostParam('localization', e.target.value)
                  }
                />
              </div>
            </div>
            <div className={clsx(className, styles.dates)}>
              <div>
                <h4>Data publikacji:</h4>
                <p>{formatDate(new Date())}</p>
              </div>
              <div>
                <h4>Status ogłoszenia:</h4>
                <p>Szkic</p>
              </div>
              <div>
                <h4>Data ostatniej aktualizacji:</h4>
                <p>
                  {actualisationDate === publicationDate
                    ? formatDate(new Date())
                    : actualisationDate}
                </p>
              </div>
            </div>
            <p className={clsx(className, styles.arsrterisk)}>
              * Pola oznaczone gwiazdką są wymagane!
            </p>
          </form>
        ) : (
          <NotFound />
        )}
      </div>
    );
  }
}

Component.propTypes = {
  className: PropTypes.string,
  isLogged: PropTypes.bool,
  to: PropTypes.string,
  addPost: PropTypes.func,
  fetchPublishedPosts: PropTypes.func,
  request: PropTypes.object,
  posts: PropTypes.array,
  actualisationDate: PropTypes.string,
  publicationDate: PropTypes.string,
};

const mapStateToProps = state => ({
  isLogged: state.login.loggedIn,
  request: getRequest(state, ADD_POST),
  posts: state.posts.data,
});

const mapDispatchToProps = dispatch => ({
  addPost: data => dispatch(addPostRequest(data)),
  fetchPublishedPosts: () => dispatch(fetchPublished()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export { Container as PostAdd, Component as PostAddComponent };
