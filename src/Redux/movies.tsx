import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import axios from 'axios';
import Swal from 'sweetalert2';

export const fetchMovies=createAsyncThunk('movies/fetchMovies',async(id)=>{
    const response=await axios.get(`${process.env.REACT_APP_MOVIE_BASEURL}/discover/movie?api_key=${process.env.REACT_APP_MOVIE_KEY}`);
    return {id:id,data:response.data};
});

export const fetchTrends=createAsyncThunk('movies/fetchTrends',async(id)=>{
    const response=await axios.get(`${process.env.REACT_APP_MOVIE_BASEURL}/trending/week?api_key=${process.env.REACT_APP_MOVIE_KEY}`);
    return {id:id,data:response.data};
});

export const fetchLatestMovies=createAsyncThunk('movies/fetchLatestMovies',async(id)=>{
    const response=await axios.get(`${process.env.REACT_APP_MOVIE_BASEURL}/movie/latest?api_key=${process.env.REACT_APP_MOVIE_KEY}`);
    return {id:id,data:response.data};
});

export const fetchPopularMovies=createAsyncThunk('movies/fetchPopularMovies',async(id)=>{
    const response=await axios.get(`${process.env.REACT_APP_MOVIE_BASEURL}/movie/latest?api_key=${process.env.REACT_APP_MOVIE_KEY}`);
    return {id:id,data:response.data};
});

export const fetchTopRatedMovies=createAsyncThunk('movies/fetchTopRatedMovies',async(id)=>{
    const response=await axios.get(`${process.env.REACT_APP_MOVIE_BASEURL}/movie/latest?api_key=${process.env.REACT_APP_MOVIE_KEY}`);
    return {id:id,data:response.data};
});

type InitialState={
    movies:any[],
    trends:any[],
    latest:any,
    popular:any[],
    top_rated:any[],
    latest_persons:any[],
    popular_persons:any[],
    genres:any[],
}

const initialState:InitialState={
    movies:[],
    trends:[],
    latest:{},
    popular:[],
    top_rated:[],
    latest_persons:[],
    popular_persons:[],
    genres:[],
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
            Swal.fire(
                'Error Occured',
                error.message,
                'error'
            )
        })
        builder.addCase(fetchTrends.fulfilled,(state,{payload})=>{
            console.log('payload',payload)
            state.trends=payload.data.results;
        })
        builder.addCase(fetchTrends.rejected,(state,{error})=>{
            console.log('error Redux',error)
            Swal.fire(
                'Error Occured',
                error.message,
                'error'
            )
        })
        builder.addCase(fetchLatestMovies.fulfilled,(state,{payload})=>{
            console.log('payload',payload)
            state.latest=payload.data.results;
        })
        builder.addCase(fetchLatestMovies.rejected,(state,{error})=>{
            console.log('error Redux',error)
            Swal.fire(
                'Error Occured',
                error.message,
                'error'
            )
        })
        builder.addCase(fetchPopularMovies.fulfilled,(state,{payload})=>{
            console.log('payload',payload)
            state.popular=payload.data.results;
        })
        builder.addCase(fetchPopularMovies.rejected,(state,{error})=>{
            console.log('error Redux',error)
            Swal.fire(
                'Error Occured',
                error.message,
                'error'
            )
        })
        builder.addCase(fetchTopRatedMovies.fulfilled,(state,{payload})=>{
            console.log('payload',payload)
            state.top_rated=payload.data.results;
        })
        builder.addCase(fetchTopRatedMovies.rejected,(state,{error})=>{
            console.log('error Redux',error)
            Swal.fire(
                'Error Occured',
                error.message,
                'error'
            )
        })
    }
});


export const getMovies=(state:any)=>state.moviesReducer.movies;
export default moviesSlice.reducer;
