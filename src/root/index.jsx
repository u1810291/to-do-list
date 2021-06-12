import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import App from '../containers/App';
import Modal from '../components/Modals/Blured';
import FullPage from '../components/Modals/FullPage';
import Notification from '../components/Notification';
import Loading from '../components/Loading';

export default () => (
  <Provider store={store}>
    <Router>
      <App />
      <Modal />
      <FullPage />
      <Notification />
      <Loading />
    </Router>
  </Provider>
);
