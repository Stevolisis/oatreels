import { combineReducers, configureStore } from "@reduxjs/toolkit";
import moviesReducer from './movies'

// console.log('movered',moviesReducer);

const combinedReducers=combineReducers({
    moviesReducer:moviesReducer
});

export const store=configureStore({
    reducer:combinedReducers
});

export type RootState = ReturnType<typeof combinedReducers>;
export type AppDispatch = typeof store.dispatch;