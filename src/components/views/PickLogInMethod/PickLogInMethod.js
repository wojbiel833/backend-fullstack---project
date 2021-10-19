import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';
import GoogleButton from 'react-google-button';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import styles from './PickLogInMethod.module.scss';

const style = {
  textAlign: 'center',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Component = ({ className, children }) => {
  const [open, setOpen] = React.useState(true);
  // const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className={clsx(className, styles.root)}>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={clsx(className, styles.box)} sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Zaloguj się za pomocą:
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div>
              <GoogleButton
                onClick={() => {
                  window.location = 'http://localhost:8000/auth/google';
                }}
              />
              {/* <div
                className="col s12 m6 offset-m3 center-align"
                style={{
                  margin: 'auto',
                  width: '320px',
                  left: '0%',
                }}
              >
                <a
                  className="oauth-container btn darken-4 white black-text"
                  href="http://localhost:8000/auth/google"
                  style={{
                    textTransform: 'none',
                    fontSize: '17px',
                    fontWeight: '500',
                    width: '100%',
                  }}
                >
                  <div className="left">
                    <img
                      width="20px"
                      style={{ marginTop: '7px', marginRight: '8px' }}
                      alt="Google sign-in"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
                    />
                  </div>
                  Kontynuuj przy uzyciu Google
                </a>
              </div> */}
              <br />
              <div
                className={clsx(className, styles.loginBtn, 'fb-login-button')}
                // href="/auth/facebook"
                data-width=""
                data-size="large"
                data-button-type="continue_with"
                data-layout="default"
                data-auto-logout-link="false"
                data-use-continue-as="false"
              ></div>
            </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  );

  // <div className={clsx(className, styles.root)}>
  //   <div className={clsx(className, styles.overlay)}></div>
  //   <div className={clsx(className, styles.pickLogin)}>
  //     <h3>Zaloguj się za pomocą:</h3>
  //     <div className={clsx(className, styles.buttons)}>
  //       <a
  //         className={clsx(className, styles.loginBtn, styles.loginBtnGoogle)}
  //         href="/auth/google"
  //       >
  //         Kontynuuj przy użyciu Google
  //       </a>
  //       <br />
  //       <div
  //         className={clsx(className, styles.loginBtn, 'fb-login-button')}
  //         data-width=""
  //         data-size="large"
  //         data-button-type="continue_with"
  //         data-layout="default"
  //         data-auto-logout-link="false"
  //         data-use-continue-as="false"
  //       ></div>
  //     </div>
  //   </div>
  // </div>
};

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
  Component as PickLogInMethod,
  // Container as PickLogInMethodContainer,
  Component as PickLogInMethodComponent,
};
