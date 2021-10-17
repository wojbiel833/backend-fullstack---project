import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '../../common/Button/Button';
import { NotFound } from '../NotFound/NotFound';

import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

import clsx from 'clsx';
import { formatDate } from '../../utils/formatDate';

import { connect } from 'react-redux';
import {
  addPostRequest,
  getRequest,
  ADD_POST,
} from '../../../redux/postsRedux';

import TextField from '@mui/material/TextField';

import styles from './PostAdd.module.scss';

class Component extends React.Component {
  state = {
    post: { name: '', content: '', email: '', localization: '' },
    error: null,
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
      error = 'Nazwa lokaliozacji jest za krótka (min. 3 znaki)';

    if (!error) {
      const formData = new FormData();

      for (let key of ['name', 'content', 'email', 'phone', 'localization']) {
        formData.append(key, this.state[key]);
      }

      // formData.append('file', photo.file)

      this.adsPost(formData);
      this.setState({ error: null });
      console.log('udało się', formData);
    } else {
      this.setState({ error });

      console.log('nie udało się');
    }
  };

  render() {
    const { className, isLogged, request } = this.props;
    const { submitForm } = this;

    console.log('this.props', this.props);
    console.log('this.state', this.state);
    console.log('this', this);

    return (
      <div>
        {isLogged ? (
          <form className={clsx(className, styles.root)} onSubmit={submitForm}>
            <div className={clsx(className, styles.content)}>
              <div className={clsx(className, styles.head)}>
                <h3>Nowe ogłoszenie</h3>
                <Button
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
                  // error
                  id="filled-error-helper-text"
                  label="Tytuł ogłoszenia*"
                  placeholder="Tytuł ogłoszenia"
                  // helperText="Tytuł jest wymagany"
                  variant="filled"
                  fullWidth={true}
                  minLength={10}
                  name="name"
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
                <p>{formatDate(new Date())}</p>
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
  // children: PropTypes.node,
  className: PropTypes.string,
  // name: PropTypes.string,
  // icon: PropTypes.object,
  isLogged: PropTypes.bool,
  to: PropTypes.string,
  addPost: PropTypes.func,
  request: PropTypes.func,
};

const mapStateToProps = state => ({
  isLogged: state.login.loggedIn,
  request: getRequest(state, ADD_POST),
});

const mapDispatchToProps = dispatch => ({
  addPost: data => dispatch(addPostRequest(data)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as PostAdd,
  Container as PostAdd,
  Component as PostAddComponent,
};
