import React from 'react';
import PropTypes from 'prop-types';

import { Post } from '../../common/Post/Post';
import { PostAdd } from '../PostAdd/PostAdd';
import { PostEdit } from '../PostEdit/PostEdit';
import { Announcements } from '../../features/Announcements/Announcements';
import { NotFound } from '../NotFound/NotFound';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import Link from '@mui/material/Link';
import { styled } from '@mui/material/styles';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import styles from './Homepage.module.scss';

const StyledLink = styled(Link)(({ theme }) => ({
  position: 'relative',
  fontSize: '20px',
  margin: '20px',
}));

const Component = ({ className, children }) => (
  <div className={clsx(className, styles.root)}>
    {/* {isLogged ?  */}
    <h4 className={clsx(className, styles.postAdd)}>
      <StyledLink href="#">
        <AddCircleOutlineIcon className={clsx(className, styles.icon)} />
        <p>Dodaj nowe ogłoszenie</p>
      </StyledLink>
    </h4>
    <PostAdd />
    <PostEdit />
    <Post />
    <Announcements />
    <NotFound />

    {/* : ""} */}
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
