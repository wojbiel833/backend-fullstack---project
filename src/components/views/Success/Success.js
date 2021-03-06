import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { createActionLogIn } from '../../../redux/navbarRedux.js';
import { connect } from 'react-redux';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

// import styles from './Success.module.scss';

const style = {
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
const Component = ({ className, children, logIn }) => {
  useEffect(() => {
    logIn();
  }, []);

  const [open, setOpen] = React.useState(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Pomyślnie zalogowano
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  logIn: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  logIn: () => dispatch(createActionLogIn(true)),
});

const Container = connect(null, mapDispatchToProps)(Component);

export { Container as Success, Component as SuccessComponent };
