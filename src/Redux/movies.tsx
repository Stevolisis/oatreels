import {createSlice} from '@reduxjs/toolkit'

type InitialState={
    movies:any[];
}

const initialState:InitialState={
    movies:[]
};

const moviesSlice=createSlice({
    name:'movies',
    initialState,
    reducers:{}
});

export default moviesSlice.reducer;