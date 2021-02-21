import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router' // react-router v4/v5
import { ConnectedRouter } from 'connected-react-router'
import configureStore, { history } from './configureStore'
import App from './components/App';

// import './index.css'
//https://github.com/supasate/connected-react-router
const store = configureStore(/* provide initial state if any */)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}> { /* place ConnectedRouter under Provider */ }
    <> { /* your usual react-router v4/v5 routing */ }
      <Switch>
         {/* <Route exact path="/" render={() => (<div>Match</div>)} /> */}
        {/* <Route render={() => (<div>Miss</div>)} /> */}
        <Route path="/" component={App} />
      </Switch>
      </>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
