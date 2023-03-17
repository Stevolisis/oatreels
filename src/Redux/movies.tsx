import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import axios from 'axios';
import Swal from 'sweetalert2';

export const fetchMovies=createAsyncThunk('movies/fetchMovies',async()=>{
    const response=await axios.get(`${process.env.REACT_APP_MOVIE_BASEURL}/discover/movie?api_key=${process.env.REACT_APP_MOVIE_KEY}`);
    return response.data;
});

export const fetchTrends=createAsyncThunk('movies/fetchTrends',async()=>{
    const response=await axios.get(`${process.env.REACT_APP_MOVIE_BASEURL}/trending/all/week?api_key=${process.env.REACT_APP_MOVIE_KEY}&page=2`);
    return response.data;
});

export const fetchLatestMovies=createAsyncThunk('movies/fetchLatestMovies',async()=>{
    const response=await axios.get(`${process.env.REACT_APP_MOVIE_BASEURL}/movie/latest?api_key=${process.env.REACT_APP_MOVIE_KEY}`);
    return response.data;
});

export const fetchPopularMovies=createAsyncThunk('movies/fetchPopularMovies',async()=>{
    const response=await axios.get(`${process.env.REACT_APP_MOVIE_BASEURL}/movie/popular?api_key=${process.env.REACT_APP_MOVIE_KEY}&page=2`);
    return response.data;
});

export const fetchTopRatedMovies=createAsyncThunk('movies/fetchTopRatedMovies',async()=>{
    const response=await axios.get(`${process.env.REACT_APP_MOVIE_BASEURL}/movie/top_rated?api_key=${process.env.REACT_APP_MOVIE_KEY}&page=2`);
    return response.data;
});

export const fetchUpComingMovies=createAsyncThunk('movies/fetchUpComingMovies',async()=>{
    const response=await axios.get(`${process.env.REACT_APP_MOVIE_BASEURL}/movie/upcoming?api_key=${process.env.REACT_APP_MOVIE_KEY}`);
    return response.data;
});

export const fetchGenres=createAsyncThunk('movies/fetchGenres',async()=>{
    const response=await axios.get(`${process.env.REACT_APP_MOVIE_BASEURL}/genre/movie/list?api_key=${process.env.REACT_APP_MOVIE_KEY}`);
    return response.data;
});

type InitialState={
    movies:any[],
    trends:any[],
    latest:any,
    popular:any[],
    top_rated:any[],
    up_coming:any[],
    genres:any[],
}

const initialState:InitialState={
    movies:[],
    trends:[],
    latest:{},
    popular:[],
    top_rated:[],
    up_coming:[],
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
            state.movies=payload.results;
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
            state.trends=payload.results;
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
            state.latest=payload;
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
            state.popular=payload.results;
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
            state.top_rated=payload.results;
        })
        builder.addCase(fetchTopRatedMovies.rejected,(state,{error})=>{
            console.log('error Redux',error)
            Swal.fire(
                'Error Occured',
                error.message,
                'error'
            )
        })
        builder.addCase(fetchUpComingMovies.fulfilled,(state,{payload})=>{
            state.up_coming=payload.results;
        })
        builder.addCase(fetchUpComingMovies.rejected,(state,{error})=>{
            console.log('error Redux',error)
            Swal.fire(
                'Error Occured',
                error.message,
                'error'
            )
        })
        builder.addCase(fetchGenres.fulfilled,(state,{payload})=>{
            state.genres=payload.data['genres'];
        })
        builder.addCase(fetchGenres.rejected,(state,{error})=>{
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
export const getTrends=(state:any)=>state.moviesReducer.trends;
export const getPopular=(state:any)=>state.moviesReducer.popular;
export const getLatest=(state:any)=>state.moviesReducer.latest;
export const getUpComing=(state:any)=>state.moviesReducer.up_coming;
export const getGenres=(state:any)=>state.moviesReducer.genres;
export const getTopRated=(state:any)=>state.moviesReducer.top_rated;
export default moviesSlice.reducer;
