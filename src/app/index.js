/* eslint-env browser */
import App from './containers/app';
import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.body
  );
};

if (module.hot) {
  module.hot.accept('./containers/app', () => {
    render(App);
  });
}

render(App);
