import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { createWrapper } from 'next-redux-wrapper';
import authReducer from './auth/reducer';

const reducers = combineReducers({
	auth: authReducer,
});

const store = (context) => createStore(reducers, applyMiddleware(thunk));

const wrapper = createWrapper(store, { debug: true });

export default wrapper;
