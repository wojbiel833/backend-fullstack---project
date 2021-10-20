import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { MainLayout } from './components/layout/MainLayout/MainLayout';
import { Homepage } from './components/views/Homepage/Homepage';
import { PostContainer } from './components/common/Post/Post';
import { PostAdd } from './components/views/PostAdd/PostAdd';
import { NotFound } from './components/views/NotFound/NotFound';
import { YourPostsContainer } from './components/views/YourPosts/YourPosts';
import { PickLogInMethod } from './components/views/PickLogInMethod/PickLogInMethod';
import { YourPostContainer } from './components/common/YourPost/YourPost';
import { Success } from './components/views/Success/Success';
import { Failure } from './components/views/Failure/Failure';

import { store } from './redux/store';

import { CssBaseline } from '@material-ui/core';
import {
  createTheme,
  StylesProvider,
  ThemeProvider,
} from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: { main: '#2B4C6F' },
  },
});

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <MainLayout className="MainLayout">
            <Switch>
              <Route exact path="/" component={Homepage} className="Homepage" />
              <Route
                exact
                path="/posts"
                component={YourPostsContainer}
                className="YourPosts"
              />
              <Route
                exact
                path="/post/add"
                component={PostAdd}
                className="PostAdd"
              />
              <Route
                exact
                path="/post/:id"
                component={PostContainer}
                className="Post"
              />
              <Route
                exact
                path="/post/:id/edit"
                component={YourPostContainer}
                className="YourPost"
              />
              <Route
                exact
                path="/auth0/login"
                component={PickLogInMethod}
                className="PickLogInMethod"
              />
              <Route
                exact
                path="/login/success"
                component={Success}
                className="Success"
              />
              <Route
                exact
                path="/login/failure"
                component={Failure}
                className="Failure"
              />
              <Route path="*" component={NotFound} className="NotFound" />
            </Switch>
          </MainLayout>
        </ThemeProvider>
      </StylesProvider>
    </BrowserRouter>
  </Provider>
);

export { App };
