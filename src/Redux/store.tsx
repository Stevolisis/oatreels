import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER, } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import { useSelector } from "react-redux";
import { TypedUseSelectorHook, useDispatch } from "react-redux";
import moviesReducer from './movies';
import searchReducer from './searches';
import personsReducer from './persons';
import personReducer from './person';
import tvsReducer from './tvs';
import tvReducer from './tv';
import movieReducer from './movie';
import favouriteReducer from './favourites';

const persistConfig = {
    key: 'root',
    storage,
    version: 1,
    whitelist:['cartReducer']
}

const combinedReducers=combineReducers({
    moviesReducer:moviesReducer,
    movieReducer:movieReducer,
    tvsReducer:tvsReducer,
    tvReducer:tvReducer,
    personsReducer:personsReducer,
    personReducer:personReducer,
    searchReducer:searchReducer,
    favouriteReducer:favouriteReducer,
});

// export const store=configureStore({
//     reducer:combinedReducers
// });

const persistedReducer = persistReducer(persistConfig, combinedReducers);
export const store=configureStore({
    reducer:persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
});

// export type RootState = ReturnType<typeof combinedReducers>;
// export type AppDispatch = typeof store.dispatch;

export const UseAppDispatch:()=> typeof store.dispatch= useDispatch;
export const useAppSelector:TypedUseSelectorHook<ReturnType<typeof store.getState>>=useSelector;


