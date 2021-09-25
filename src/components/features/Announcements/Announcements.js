import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import { styled } from '@mui/material/styles';
import Link from '@mui/material/Link';

import styles from './Announcements.module.scss';

const StyledLink = styled(Link)(({ theme }) => ({
  position: 'relative',
  fontSize: '20px',
  margin: '20px',
}));

const Component = ({ className, children }) => (
  <div className={clsx(className, styles.root)}>
    <h2>Ogłoszenia</h2>
    <div className={clsx(className, styles.announcements)}>
      <div className={clsx(className, styles.announcement)}>
        <h4>
          <StyledLink
            href="#"
            className={clsx(className, styles.announcementTitle)}
          >
            Srzedam
          </StyledLink>
        </h4>
        <p className={clsx(className, styles.announcementDescription)}>aaa</p>
      </div>
      <div className={clsx(className, styles.announcement)}>
        <h4>
          <StyledLink
            href="#"
            className={clsx(className, styles.announcementTitle)}
          >
            Zamienie auto
          </StyledLink>
        </h4>
        <p className={clsx(className, styles.announcementDescription)}>bbb</p>
      </div>
      <div className={clsx(className, styles.announcement)}>
        <h4>
          <StyledLink
            href="#"
            className={clsx(className, styles.announcementTitle)}
          >
            Kupie mieszkanie do 50m2
          </StyledLink>
        </h4>
        <p className={clsx(className, styles.announcementDescription)}>ccc</p>
      </div>
      {children}
    </div>
    {children}
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
  Component as Announcements,
  // Container as AnnouncementsContainer,
  Component as AnnouncementsComponent,
};
