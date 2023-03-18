import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import axios from 'axios';
import Swal from 'sweetalert2';

export const searchMovies=createAsyncThunk('search/searchMovies',async({type:type,key:key}:any)=>{
    const response=await axios.get(`${process.env.REACT_APP_MOVIE_BASEURL}/search/${type}?query=${key}&api_key=${process.env.REACT_APP_MOVIE_KEY}&language=en-US`);
    return response.data;
});

type InitialState={
    searches:any[],
}

const initialState:InitialState={
    searches:[],
};

const searchSlice=createSlice({
    name:'search',
    initialState,
    reducers:{
        resetSearch:(state)=>{
            state.searches=[];
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(searchMovies.fulfilled,(state,{payload})=>{
            console.log('payload',payload)
            state.searches=payload.results;
        })
        builder.addCase(searchMovies.rejected,(state,{error})=>{
            console.log('error Redux',error)
            Swal.fire(
                'Error in Search',
                error.message,
                'error'
            )
        })
    }
});

export const {resetSearch}=searchSlice.actions;
export const getSearches=(state:any)=>state.searchReducer.searches;
export default searchSlice.reducer;
