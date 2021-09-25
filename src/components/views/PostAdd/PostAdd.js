import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '../../common/Button/Button';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import TextField from '@mui/material/TextField';
// import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import styles from './PostAdd.module.scss';

const Component = ({ className, children }) => (
  <div className={clsx(className, styles.root)}>
    <div className={clsx(className, styles.head)}>
      <h3>Nowe ogłoszenie</h3>
      <Button name="Dodaj ogłoszenie" />
    </div>
    <div className={clsx(className, styles.inputs)}>
      <TextField
        // error
        id="filled-error-helper-text"
        label="Tytuł ogłoszenia"
        defaultValue="Tytuł ogłoszenia"
        helperText="Tytuł jest wymagany"
        variant="filled"
        fullWidth="true"
      />

      <TextField
        id="outlined-multiline-static"
        label="Treść ogłoszenia"
        multiline
        rows={8}
        defaultValue="Kupie/Sprzedam/Zamienię/Wynajmę..."
        fullWidth="true"
      />
    </div>

    {children}
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  name: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as PostAdd,
  // Container as PostAddContainer,
  Component as PostAddComponent,
};
