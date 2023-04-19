import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { transactionListReducer } from "./reducers/listReducer";
import { transactionReducer } from "./reducers/transactionReducer";
import { validationReducer } from "./reducers/validationReducer";
import { appSaga } from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: combineReducers({
    transaction: transactionReducer,
    validation: validationReducer,
    transactionList: transactionListReducer,
  }),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(appSaga);

export default store;
