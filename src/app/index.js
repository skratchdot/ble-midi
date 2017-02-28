/* eslint-env browser */
import './styles/app.less';
import App from './containers/app';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configure-store';
import injectTapEventPlugin from 'react-tap-event-plugin';

const store = configureStore();

const render = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer>
        <Component />
      </AppContainer>
    </Provider>,
    document.body
  );
};

if (module.hot) {
  module.hot.accept('./containers/app', () => {
    render(App);
  });
}

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

render(App);
