import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import { styled } from '@mui/material/styles';
import Link from '@mui/material/Link';

import styles from './Announcements.module.scss';

const StyledLink = styled(Link)(({ theme }) => ({
  position: 'relative',
  fontSize: '20px',
  margin: '20px',
}));

const Component = ({ className, children, posts }) => {
  console.log(posts);
  return (
    <div className={clsx(className, styles.root)}>
      {posts.map(post => (
        <div className={clsx(className, styles.announcements)} key={post.id}>
          <div className={clsx(className, styles.content)}>
            <div className={clsx(className, styles.head)}>
              <h3>{post.name}</h3>
            </div>
            <p className={clsx(className, styles.text)}>{post.content}</p>
          </div>
          <div className={clsx(className, styles.contact)}>
            <div>
              <h4>E-mail:</h4>
              <p>{post.email}</p>
            </div>
            <div>
              <h4>Telefon:</h4>
              <p>{post.phone}</p>
            </div>
            <div>
              <h4>Lokalizacja:</h4>
              <p>{post.localization}</p>
            </div>
          </div>
          <div className={clsx(className, styles.dates)}>
            <div>
              <h4>Data publikacji:</h4>
              <p>{post.publicationDate}</p>
            </div>
            <div>
              <h4>Status ogłoszenia:</h4>
              <p>{post.status}</p>
            </div>
            <div>
              <h4>Data ostatniej aktualizacji:</h4>
              <p>{post.actualisationDate}</p>
            </div>
          </div>
        </div>
      ))}

      {/* <h2>Ogłoszenia</h2>
      <div className={clsx(className, styles.announcements)}>
        <div className={clsx(className, styles.announcement)}>
          <h4>
            <StyledLink
              href="#"
              className={clsx(className, styles.announcementTitle)}
            >
              Sprzedam
            </StyledLink>
          </h4>
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
        </div>
        {children}
      </div> */}
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  posts: PropTypes.array,
};

const mapStateToProps = state => ({
  posts: state.posts.data,
});

const mapDispatchToProps = dispatch => ({
  // someAction: arg => dispatch(reduxActionCreator(arg)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as Announcements,
  Container as Announcements,
  Component as AnnouncementsComponent,
};
