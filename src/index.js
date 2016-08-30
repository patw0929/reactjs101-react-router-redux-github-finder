import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Main from './components/Main';
import HomePageContainer from './containers/HomePage';
import ResultPageContainer from './containers/ResultPage';
import store from './store';

// FastClick for material-ui
injectTapEventPlugin();

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <Router history={browserHistory}>
        <Route path="/" component={Main}>
          <IndexRoute component={HomePageContainer} />
          <Route path="/result" component={ResultPageContainer} />
        </Route>
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('app')
);
