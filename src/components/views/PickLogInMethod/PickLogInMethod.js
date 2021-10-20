import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import GoogleButton from 'react-google-button';

import Box from '@mui/material/Box';
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
                style={{ width: '320px', margin: 'auto' }}
                onClick={() => {
                  window.location = 'http://localhost:8000/auth/google';
                }}
              />
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
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export { Component as PickLogInMethod, Component as PickLogInMethodComponent };
