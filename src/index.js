import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { takeEvery, put } from 'redux-saga/effects'
import axios from 'axios'


const addPetReducer = (state =[], action) => {
    switch (action.type) {
        case 'SET_ALLPETS':
            return action.payload;
        default:
            return state;
    }
}

function* getHistory(action) {
    let response = yield axios.get('/api/pets/all')
    console.log('saga getHistory response', response.data)
    yield put({
        type: 'SET_ALLPETS',
        payload: response.data
    })
}




const sagaMiddleware = createSagaMiddleware();

function* watcherSaga(){
    yield takeEvery('GET_HISTORY', getHistory)
}

const store = createStore(
    combineReducers({
        addPetReducer
    }),
    applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(watcherSaga)

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