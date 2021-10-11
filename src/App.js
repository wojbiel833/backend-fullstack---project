import React from 'react';
// import PropTypes from 'prop-types';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import {
  createTheme,
  StylesProvider,
  ThemeProvider,
} from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

import { store } from './redux/store';

import { MainLayout } from './components/layout/MainLayout/MainLayout';
import { Homepage } from './components/views/Homepage/Homepage';
import { PostContainer } from './components/common/Post/Post';
// import { PostEdit } from './components/views/PostEdit/PostEdit';
import { PostAdd } from './components/views/PostAdd/PostAdd';
import { NotFound } from './components/views/NotFound/NotFound';
import { YourPostsContainer } from './components/views/YourPosts/YourPosts';
import { YourPostContainer } from './components/common/YourPost/YourPost';

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
          <MainLayout>
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route exact path="/posts" component={YourPostsContainer} />
              <Route exact path="/post/add" component={PostAdd} />
              <Route exact path="/post/:id" component={PostContainer} />
              <Route
                exact
                path="/post/:id/edit"
                // component={PostEdit}
                component={YourPostContainer}
              />
              <Route path="*" component={NotFound} />
            </Switch>
          </MainLayout>
        </ThemeProvider>
      </StylesProvider>
    </BrowserRouter>
  </Provider>
);

export { App };

// import React from 'react';
// // import PropTypes from 'prop-types';
// import { BrowserRouter, Route } from 'react-router-dom';
// import { AnimatedSwitch } from 'react-router-transition';

// import { Provider } from 'react-redux';

// import {
//   createTheme,
//   StylesProvider,
//   ThemeProvider,
// } from '@material-ui/core/styles';
// import { CssBaseline } from '@material-ui/core';

// import { store } from './redux/store';

// import { MainLayout } from './components/layout/MainLayout/MainLayout';
// import { Homepage } from './components/views/Homepage/Homepage';
// import { Post } from './components/common/Post/Post';
// import { PostEdit } from './components/views/PostEdit/PostEdit';
// import { PostAdd } from './components/views/PostAdd/PostAdd';
// import { NotFound } from './components/views/NotFound/NotFound';
// import { YourPosts } from './components/views/YourPosts/YourPosts';

// import styles from './styles/switchWrapper.scss';

// const theme = createTheme({
//   palette: {
//     primary: { main: '#2B4C6F' },
//   },
// });

// const App = () => (
//   <Provider store={store}>
//     <StylesProvider injectFirst>
//       <ThemeProvider theme={theme}>
//         <CssBaseline />
//         <MainLayout>
//           <BrowserRouter>
//             <AnimatedSwitch
//               atEnter={{ opacity: 0 }}
//               atLeave={{ opacity: 0 }}
//               atActive={{ opacity: 1 }}
//               className={styles.switchWrapper}
//             >
//               <Route exact path="/" component={Homepage} />
//               <Route exact path="/posts" component={YourPosts} />
//               <Route exact path="/post/add" component={PostAdd} />
//               <Route exact path="/post/:id" component={Post} />
//               <Route
//                 exact
//                 path="/post/:id/edit"
//                 component={PostEdit}
//                 // component={YourPost}
//               />
//               <Route path="*" component={NotFound} />
//             </AnimatedSwitch>
//           </BrowserRouter>
//         </MainLayout>
//       </ThemeProvider>
//     </StylesProvider>
//   </Provider>
// );

// export { App };
