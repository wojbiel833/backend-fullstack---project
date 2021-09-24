import React from 'react';
import PropTypes from 'prop-types';

import Link from '@mui/material/Link';

import clsx from 'clsx';

import { styled } from '@mui/material/styles';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Post } from '../../common/Post/Post';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Homepage.module.scss';
import { PostAdd } from '../PostAdd/PostAdd';

const StyledLink = styled(Link)(({ theme }) => ({
  position: 'relative',
  fontSize: '20px',
  margin: '20px',
}));

const Component = ({ className, children }) => (
  <div className={clsx(className, styles.root)}>
    <PostAdd />
    {/* {isLogged ?  */}
    <h4 className={clsx(className, styles.postAdd)}>
      <StyledLink href="#">
        <AddCircleOutlineIcon className={clsx(className, styles.icon)} />
        <p>Dodaj nowe ogłoszenie</p>
      </StyledLink>
    </h4>
    <Post />

    {/* : ""} */}
    <div className={clsx(className, styles.announcements)}>
      <h4>
        <StyledLink
          href="#"
          className={clsx(className, styles.announcementTitle)}
        >
          Srzedam
        </StyledLink>
      </h4>
      <p className={clsx(className, styles.announcementDescription)}></p>
      <h4>
        {' '}
        <StyledLink
          href="#"
          className={clsx(className, styles.announcementTitle)}
        >
          Zamienie auto
        </StyledLink>
      </h4>
      <p className={clsx(className, styles.announcementDescription)}></p>
      <h4>
        {' '}
        <StyledLink
          href="#"
          className={clsx(className, styles.announcementTitle)}
        >
          Kupie mieszkanie do 50m2
        </StyledLink>
      </h4>
      <p className={clsx(className, styles.announcementDescription)}></p>
      {children}
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
  Component as Homepage,
  // Container as HomepageContainer,
  Component as HomepageComponent,
};
