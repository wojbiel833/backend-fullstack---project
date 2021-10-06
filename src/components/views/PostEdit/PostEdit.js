import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '../../common/Button/Button';

import { faSave } from '@fortawesome/free-solid-svg-icons';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import TextField from '@mui/material/TextField';

import styles from './PostEdit.module.scss';

const Component = ({ className, children }) => (
  <div className={clsx(className, styles.root)}>
    <div className={clsx(className, styles.content)}>
      <div className={clsx(className, styles.head)}>
        <h3>Twoje ogłoszenie</h3>
        <Button name="Zapisz" icon={faSave} />
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
          fullWidth="true"
          minLength={10}
        />

        <TextField
          className={clsx(className, styles.input)}
          id="outlined-multiline-static"
          label="Treść ogłoszenia"
          multiline
          rows={8}
          defaultValue="Kupie/Sprzedam/Zamienię/Wynajmę..."
          fullWidth="true"
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
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as PostEdit,
  // Container as PostEditContainer,
  Component as PostEditComponent,
};
