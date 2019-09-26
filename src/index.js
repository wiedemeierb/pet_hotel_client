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

///REDUCERS HERE
const addPetReducer = (state =[], action) => {
    switch (action.type) {
        case 'SET_ALLPETS':
            return action.payload;
        default:
            return state;
    }
}

const getOwnersReducer = (state=[], action) => {
    switch(action.type) {
        case 'SET_OWNERS' :
            return action.payload
        default:
            return state;
    }
}




///SAGAS HERE
function* getHistory(action) {
    try {
        let response = yield axios.get('/api/pets/all')
        console.log('saga getHistory response', response.data)
        yield put({
            type: 'SET_ALLPETS',
            payload: response.data
        })
    } catch (error) {
        console.log('in getHistory saga error:', error);
    }
}

///POST NEW PETS TO DB THEN GET HISTORY OF ALL PETS IN DB
function* addPet(action) {
    try {
        yield axios.post('/api/pets/add', action.payload)
        console.log('in addPet saga');
        yield put({
            type: 'GET_HISTORY'
        })
    } catch (error) {
        console.log('in addPet saga error:', error);
        
    }
    
}

///GET ALL OWNERS AND NUMBER OF PETS IN DB FOR MANAGE OWNERS VIEW
function* getOwners(action) {
    try {
        let response = yield axios.get('/NEED TO ADD ONCE ESTABLISHED')
        console.log('in getOwners saga:', response.data);
        yield put({
            type: 'SET_OWNERS',
            payload: response.data
        })
    } catch (error) {
        console.log('in getOwners saga error:', error);  
    }
}

///POST NEW OWNERS INTO DATABASE, THEN DISPATCH TO GET ALL OWNERS AND SET IN REDUCER
function* addOwner(action) {
    try {
        yield axios.post('/api/owners/add', action.payload)
        console.log('in addOwner saga');
        yield put({
            type: 'GET_OWNERS'
        })
    } catch (error) {
        console.log('in addOwner saga error:', error);   
    }
}




const sagaMiddleware = createSagaMiddleware();

function* watcherSaga(){
    yield takeEvery('GET_HISTORY', getHistory)
    yield takeEvery('GET_OWNERS', getOwners)
    yield takeEvery('ADD_OWNER', addOwner)
    yield takeEvery('ADD_PET', addPet)
}

const store = createStore(
    combineReducers({
        addPetReducer,
        getOwnersReducer,
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