import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import axios from 'axios';

export const fetchMovies=createAsyncThunk('movies/fetchMovies',async()=>{
    const response=await axios.get(`${process.env.MOVIE_BASEURL}/discover/movie?api_key=${process.env.MOVIE_KEY}`);
    return response;
});

type InitialState={
    movies:any[],
    trending:any[],
    recent:any[],
}

const initialState:InitialState={
    movies:[],
    trending:[],
    recent:[]
};

const moviesSlice=createSlice({
    name:'movies',
    initialState,
    reducers:{
        addPerson:(state,{payload}:PayloadAction<any>)=>{
            state.movies=[payload]
        }
    },
    extraReducers:{
        // [fetchMovies.fulfilled]:(state,{payload}:PayloadAction<any>)=>{

        // }
    }
});

export default moviesSlice.reducer;