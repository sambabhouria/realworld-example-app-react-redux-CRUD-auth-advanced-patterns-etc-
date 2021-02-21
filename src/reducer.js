import article from './reducers/article';
import articleList from './reducers/articleList';
import auth from './reducers/auth';
import { combineReducers } from 'redux';
import common from './reducers/common';
import editor from './reducers/editor';
import home from './reducers/home';
import profile from './reducers/profile';
import settings from './reducers/settings';
import { connectRouter } from 'connected-react-router'


// https://github.com/supasate/connected-react-router
const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  article,
  articleList,
  auth,
  common,
  editor,
  home,
  profile,
  settings,
})

export default createRootReducer;

// import { routerReducer } from 'react-router-redux';
// export default combineReducers({
//   article,
//   articleList,
//   auth,
//   common,
//   editor,
//   home,
//   profile,
//   settings,
//   router: routerReducer
// });