import { configureStore, combineReducers, Middleware, MiddlewareArray  } from '@reduxjs/toolkit';
import { createLogger } from "redux-logger"; // logger here
import thunkMiddleware from 'redux-thunk';
import bookingReducer from './slice/bookingSlice';
import thunk from 'redux-thunk'


/*if (__DEV__) {
    const createDebugger = require('redux-flipper').default;
    middlewares.push(createDebugger());
}*/
const middlewares: Middleware[] = [];
middlewares.push(createLogger());
middlewares.push(thunk);

const rootReducer = combineReducers({
  booking : bookingReducer
});

const store = configureStore({
  reducer: rootReducer,
  // middleware: [thunk],
  // middleware: [additionalMiddleware, logger] as const,
  // middleware: (getDefaultMiddleware) =>
  //   [...getDefaultMiddleware(), createLogger()]
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;

