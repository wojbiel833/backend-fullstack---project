import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '../../common/Button/Button';
import { NotFound } from '../NotFound/NotFound';

import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

import clsx from 'clsx';

import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import TextField from '@mui/material/TextField';

import styles from './PostAdd.module.scss';

const Component = ({ className, icon, isLogged }) => (
  <div>
    {isLogged ? (
      <div className={clsx(className, styles.root)}>
        <div className={clsx(className, styles.content)}>
          <div className={clsx(className, styles.head)}>
            <h3>Nowe ogłoszenie</h3>
            <Button name="Dodaj ogłoszenie" icon={faPlusCircle} />
          </div>
          <div className={clsx(className, styles.inputs)}>
            <TextField
              className={clsx(className, styles.input)}
              // error
              id="filled-error-helper-text"
              label="Tytuł ogłoszenia"
              placeholder="Tytuł ogłoszenia"
              // helperText="Tytuł jest wymagany"
              variant="filled"
              fullWidth={true}
              minLength={10}
            />

            <TextField
              className={clsx(className, styles.input)}
              id="outlined-multiline-static"
              label="Treść ogłoszenia"
              multiline
              rows={8}
              defaultValue="Kupie/Sprzedam/Zamienię/Wynajmę..."
              fullWidth={true}
              minLength={20}
            />
          </div>
        </div>
        <div className={clsx(className, styles.contact)}>
          <div>
            <TextField
              className={clsx(className, styles.input)}
              id="outlined-multiline-static"
              label="E-mail"
              rows={1}
              placeholder="example@gmail.com"
            />
          </div>
          <div>
            <TextField
              className={clsx(className, styles.input)}
              id="outlined-multiline-static"
              label="Telefon"
              rows={1}
              placeholder="0 700 880 774"
            />
          </div>
          <div>
            <TextField
              className={clsx(className, styles.input)}
              id="outlined-multiline-static"
              label="Lokalizacja"
              rows={1}
              placeholder="Warszawa"
            />
          </div>
        </div>
        <div className={clsx(className, styles.dates)}>
          <div>
            <TextField
              className={clsx(className, styles.input)}
              id="outlined-multiline-static"
              label="Data publikacji"
              rows={1}
              placeholder="01.01.1900"
            />
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
    ) : (
      <NotFound />
    )}
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  name: PropTypes.string,
  icon: PropTypes.object,
  isLogged: PropTypes.bool,
};

const mapStateToProps = state => ({
  isLogged: state.login.loggedIn,
});

const mapDispatchToProps = dispatch => ({
  // someAction: arg => dispatch(reduxActionCreator(arg)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as PostAdd,
  Container as PostAdd,
  Component as PostAddComponent,
};
