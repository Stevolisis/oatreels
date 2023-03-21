import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { TypedUseSelectorHook, useDispatch } from "react-redux";
import moviesReducer from './movies';
import searchReducer from './searches';
import personsReducer from './persons';
import personReducer from './person';
import tvsReducer from './tvs';
import tvReducer from './tv';
import movieReducer from './movie';


const combinedReducers=combineReducers({
    moviesReducer:moviesReducer,
    movieReducer:movieReducer,
    tvsReducer:tvsReducer,
    tvReducer:tvReducer,
    personsReducer:personsReducer,
    personReducer:personReducer,
    searchReducer:searchReducer,
});

export const store=configureStore({
    reducer:combinedReducers
});

// export type RootState = ReturnType<typeof combinedReducers>;
// export type AppDispatch = typeof store.dispatch;

export const UseAppDispatch:()=> typeof store.dispatch= useDispatch;
export const useAppSelector:TypedUseSelectorHook<ReturnType<typeof store.getState>>=useSelector;