import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import App from '../containers/App';
import Modal from '../components/Modals/Blured';

export default () => (
  <Provider store={store}>
    <Router>
      <App />
      <Modal />
    </Router>
  </Provider>
);
