import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import listReducer from './reducers/listReducer';

const rootreducer = combineReducers({
    list: listReducer,
});

const store = createStore(rootreducer, applyMiddleware(thunk));

export default store;