import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { HeaderContainer } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { NavBarContainer } from '../../features/NavBar/NavBar';

import { fetchPublished } from '../../../redux/postsRedux';
import { connect } from 'react-redux';

import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import styles from './MainLayout.module.scss';

class Component extends React.Component {
  componentDidMount() {
    const { fetchPublishedPosts } = this.props;
    fetchPublishedPosts();
  }
  render() {
    const { className, children } = this.props;
    return (
      <div className={clsx(className, styles.root)}>
        <NavBarContainer />
        <HeaderContainer />
        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="lg" fixed>
            {children}
          </Container>
        </React.Fragment>
        <Footer />
      </div>
    );
  }
}

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  props: PropTypes.any,
  fetchPublishedPosts: PropTypes.func,
};
const mapDispatchToProps = dispatch => ({
  fetchPublishedPosts: () => dispatch(fetchPublished()),
});

const MainLayoutContainer = connect(null, mapDispatchToProps)(Component);

export { MainLayoutContainer as MainLayout, Component as MainLayoutComponent };
