import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { createStore, combineReducers, applyMiddleware } from 'redux';


const addPetReducer = (state =[], action) => {
    switch (action.type) {
        case 'SET_ALLPETS':
            return action.payload;
        default:
            return state;
    }
}






const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    combineReducers({
        addPetReducer
    }),
    applyMiddleware(sagaMiddleware, logger)
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();