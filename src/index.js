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


///DUMMY DATA TO MAP PROPS ON MANAGE OWNERS PAGE********DELETE ME LATER
let dummydata = {
    owners: [
    {
        id: 1,
        name: 'Chris'
    }, 
    {
        id: 2,
        name: 'Bart'
    }
]
}

///REDUCERS HERE
const addPetReducer = (state =[], action) => {
    switch (action.type) {
        case 'SET_ALLPETS':
            return action.payload;
        default:
            return state;
    }
}

const getOwnersReducer = (state = dummydata, action) => {
    switch(action.type) {
        case 'SET_OWNERS' :
            return action.payload

        ///THIS CASE IS FOR THE DUMMY DATA ON MANAGE OWNERS PAGE********DELETE ME LATER
        case 'DUMMY_DATA' :
            console.log('in dummydata:', dummydata);
            return dummydata
        default:
            return state;
    }
}


///SAGAS HERE///
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
        let response = yield axios.get('/api/owners/all')
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

function* deleteOwner(action) {
    try {
        console.log('in deleteOwner saga, owner id:', action.payload);
        yield axios.delete(`/api/owners/delete/${action.payload}`)
        yield put({
            type: 'GET_OWNERS'
        })
    } catch (error) {
        console.log('in deleteOwner saga error:', error);
    }
}

function* deletePet(action) {
    try {
        console.log('in deletePet saga, pet id:', action.payload);
        yield axios.delete(`/api/pets/delete/${action.payload}`)
    } catch (error) {
        console.log('in deletePet saga error:', error);
    }
}

function* updateCheckIn(action) {
    try {
        console.log('in updateCheckIn for pet:', action.payload);
        yield axios.put(`/api/pets/checkin/${action.payload.id}`, action.payload)
        yield put({
            type: 'GET_HISTORY'
        })
    } catch (error) {
        console.log('in updateCheckIn saga error:', error);
        
    }
}


const sagaMiddleware = createSagaMiddleware();

function* watcherSaga(){
    yield takeEvery('GET_HISTORY', getHistory)
    yield takeEvery('GET_OWNERS', getOwners)
    yield takeEvery('ADD_OWNER', addOwner)
    yield takeEvery('ADD_PET', addPet)
    yield takeEvery('DELETE_OWNER',deleteOwner)
    yield takeEvery('DELETE_PET', deletePet)
    //NEED TO ADD THE DISPATCH TO HANDLECHECKIN DASHBOARD COMPONENT (AFTER THE STATE IS SET)
    yield takeEvery('UPDATE_CHECKIN', updateCheckIn)
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