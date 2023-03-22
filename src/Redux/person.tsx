import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import axios from 'axios';
import Swal from 'sweetalert2';

export const fetchPerson=createAsyncThunk('person/fetchperson',async(id:number)=>{
    const response=await axios.get(`${process.env.REACT_APP_MOVIE_BASEURL}/person/${id}?api_key=${process.env.REACT_APP_MOVIE_KEY}&language=en-US&append_to_response=videos,images`);
    return response.data;
});

export const fetchMovieCredits=createAsyncThunk('person/fetchMovieCredits',async(id:number)=>{
    const response=await axios.get(`${process.env.REACT_APP_MOVIE_BASEURL}/person/${id}/movie_credits?api_key=${process.env.REACT_APP_MOVIE_KEY}&language=en-US`);
    return response.data;
});

export const fetchTvCredits=createAsyncThunk('person/fetchTvCredits',async(id:number)=>{
    const response=await axios.get(`${process.env.REACT_APP_MOVIE_BASEURL}/person/${id}/tv_credits?api_key=${process.env.REACT_APP_MOVIE_KEY}&language=en-US`);
    return response.data;
});




type InitialState={
    person:any,
    movie_credits:any[],
    tv_credits:any[],
}

const initialState:InitialState={
    person:{},
    movie_credits:[],
    tv_credits:[],
};

const personSlice=createSlice({
    name:'person',
    initialState,
    reducers:{
        resetPerson:(state)=>{
            state.person={};
        },
        resetMovieCredits:(state)=>{
            state.movie_credits=[];
        },
        resetTvCredits:(state)=>{
            state.tv_credits=[];
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchPerson.fulfilled,(state,{payload})=>{
            state.person=payload;
        })
        builder.addCase(fetchPerson.rejected,(state,{error})=>{
            Swal.fire(
                'Error Occured',
                error.message,
                'error'
            )
        })
        builder.addCase(fetchMovieCredits.fulfilled,(state,{payload})=>{
            state.movie_credits=payload.cast;
        })
        builder.addCase(fetchMovieCredits.rejected,(state,{error})=>{
            Swal.fire(
                'Error Occured',
                error.message,
                'error'
            )
        })
        builder.addCase(fetchTvCredits.fulfilled,(state,{payload})=>{
            state.tv_credits=payload.cast;
        })
        builder.addCase(fetchTvCredits.rejected,(state,{error})=>{
            Swal.fire(
                'Error Occured',
                error.message,
                'error'
            )
        })
    }
});


export const getPerson=(state:any)=>state.personReducer.person;
export const getMovieCredits=(state:any)=>state.personReducer.movie_credits;
export const getTvCredits=(state:any)=>state.personReducer.tv_credits;
export const {resetPerson, resetMovieCredits, resetTvCredits}=personSlice.actions;
export default personSlice.reducer;