import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { rootReducer, rootSaga } from '../modules';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [thunk, sagaMiddleware];

const createStoreWithMiddlewares = applyMiddleware(...middlewares)(createStore);

const configureStore = (initialState) => createStoreWithMiddlewares(
  rootReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default configureStore();
sagaMiddleware.run(rootSaga);
