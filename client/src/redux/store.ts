import { configureStore, combineReducers, Middleware, MiddlewareArray  } from '@reduxjs/toolkit';
import { createLogger } from "redux-logger"; // logger here

import bookingReducer from './slice/bookingSlice';

/*if (__DEV__) {
    const createDebugger = require('redux-flipper').default;
    middlewares.push(createDebugger());
}*/
const middlewares: Middleware[] = [];
middlewares.push(createLogger());

const rootReducer = combineReducers({
  booking : bookingReducer
});

const store = configureStore({
  reducer: rootReducer,
  middleware: new MiddlewareArray().concat(middlewares),
  // middleware: [additionalMiddleware, logger] as const,
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat( middlewares ),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;

