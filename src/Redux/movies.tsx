import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import axios from 'axios';

export const fetchMovies=createAsyncThunk('movies/fetchMovies',async(id)=>{
    const response=await axios.get(`${process.env.REACT_APP_MOVIE_BASEURL}/discover/movie?api_key=${process.env.REACT_APP_MOVIE_KEY}`);
    return {id:id,data:response.data};
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
    extraReducers:(builder)=>{
        builder.addCase(fetchMovies.fulfilled,(state,{payload})=>{
            console.log('payload',payload)
            state.movies=payload.data.results;
        })
        builder.addCase(fetchMovies.rejected,(state,{error})=>{
            console.log('error Redux',error)
        })
    }
});


export const getMovies=(state:any)=>state.moviesReducer.movies;
export default moviesSlice.reducer;
