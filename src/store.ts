import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { transactionReducer } from "./reducers/transactionReducer";
import { validationReducer } from "./reducers/validationReducer";
import { appSaga } from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: combineReducers({
    transaction: transactionReducer,
    validation: validationReducer,
  }),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(appSaga);

export default store;
