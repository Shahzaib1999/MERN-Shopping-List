import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReduces from './reducers';

const initialState = {};

const middleware = [thunk];

const store = createStore(rootReduces, initialState, compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

export default store