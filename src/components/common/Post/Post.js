import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '../Button/Button';
import { NotFound } from '../../views/NotFound/NotFound';

import { faEdit } from '@fortawesome/free-solid-svg-icons';

import clsx from 'clsx';

import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Post.module.scss';

const Component = ({ className, children, isLogged, match }) => {
  console.log(match);

  return (
    <div>
      {isLogged ? (
        <div className={clsx(className, styles.root)}>
          <div className={clsx(className, styles.content)}>
            <div className={clsx(className, styles.head)}>
              <h3>Kupie</h3>
              {isLogged ? <Button name="Edytuj" icon={faEdit} /> : ''}
            </div>
            <p className={clsx(className, styles.text)}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            {children}
          </div>
          <div className={clsx(className, styles.contact)}>
            <div>
              <h4>E-mail:</h4>
              <p>example@gmail.com</p>
            </div>
            <div>
              <h4>Telefon:</h4>
              <p>0 700 880 774</p>
            </div>
            <div>
              <h4>Lokalizacja:</h4>
              <p>Warszawa</p>
            </div>
          </div>
          <div className={clsx(className, styles.dates)}>
            <div>
              <h4>Data publikacji:</h4>
              <p>01.01.1900</p>
            </div>
            <div>
              <h4>Status ogłoszenia:</h4>
              <p>Opublikowane</p>
            </div>
            <div>
              <h4>Data ostatniej aktualizacji:</h4>
              <p>01.01.1900</p>
            </div>
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
  isLogged: PropTypes.bool,
  match: PropTypes.object,
};

const mapStateToProps = state => ({
  isLogged: state.login.loggedIn,
  posts: state.posts.data,
});

const mapDispatchToProps = dispatch => ({
  // someAction: arg => dispatch(reduxActionCreator(arg)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Post,
  Container as PostContainer,
  Component as PostComponent,
};
