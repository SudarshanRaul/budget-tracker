import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { transactionReducer } from './reducer'

const store = configureStore({
    reducer: combineReducers(transactionReducer)
});

export default store;