import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import axios from 'axios';
import Swal from 'sweetalert2';

export const fetchMovies=createAsyncThunk('movies/fetchMovies',async(page:number)=>{
    const response=await axios.get(`${process.env.REACT_APP_MOVIE_BASEURL}/discover/movie?api_key=${process.env.REACT_APP_MOVIE_KEY}&language=en-US&page=${page}`);
    return response.data;
});

export const fetchTrends=createAsyncThunk('movies/fetchTrends',async({type:type,page:page}:any)=>{
    const response=await axios.get(`${process.env.REACT_APP_MOVIE_BASEURL}/trending/${type}/week?api_key=${process.env.REACT_APP_MOVIE_KEY}&language=en-US&page=${page}`);
    return response.data;
});

export const fetchLatestMovies=createAsyncThunk('movies/fetchLatestMovies',async(page:number)=>{
    const response=await axios.get(`${process.env.REACT_APP_MOVIE_BASEURL}/movie/latest?api_key=${process.env.REACT_APP_MOVIE_KEY}`);
    return response.data;
});

export const fetchPopularMovies=createAsyncThunk('movies/fetchPopularMovies',async(page:number)=>{
    const response=await axios.get(`${process.env.REACT_APP_MOVIE_BASEURL}/movie/popular?api_key=${process.env.REACT_APP_MOVIE_KEY}&language=en-US&page=${page}`);
    return response.data;
});

export const fetchTopRatedMovies=createAsyncThunk('movies/fetchTopRatedMovies',async(page:number)=>{
    const response=await axios.get(`${process.env.REACT_APP_MOVIE_BASEURL}/movie/top_rated?api_key=${process.env.REACT_APP_MOVIE_KEY}&language=en-US&page=${page}`);
    return response.data;
});

export const fetchUpComingMovies=createAsyncThunk('movies/fetchUpComingMovies',async(page:number)=>{
    const response=await axios.get(`${process.env.REACT_APP_MOVIE_BASEURL}/movie/upcoming?api_key=${process.env.REACT_APP_MOVIE_KEY}&language=en-US&page=${page}`);
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
    genres:[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}],
};

const moviesSlice=createSlice({
    name:'movies',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchMovies.fulfilled,(state,{payload})=>{
            state.movies=state.movies.concat(payload.results);
            const uniqueMovies = state.movies.reduce((a:any,b:any) => {
                if (!a.find((movie:any) => movie.id === b.id)) {
                  a.push(b);
                }
                return a;
              }, []);
              state.movies=uniqueMovies
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
            state.trends=state.trends.concat(payload.results);
            const uniqueTrends = state.trends.reduce((a:any,b:any) => {
                if (!a.find((movie:any) => movie.id === b.id)) {
                  a.push(b);
                }
                return a;
              }, []);
              state.trends=uniqueTrends
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
            state.popular=state.popular.concat(payload.results);
            const uniquePopular = state.popular.reduce((a:any,b:any) => {
                if (!a.find((movie:any) => movie.id === b.id)) {
                  a.push(b);
                }
                return a;
              }, []);
              state.popular=uniquePopular
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
            state.top_rated=state.top_rated.concat(payload.results);
            const uniqueTopRated = state.top_rated.reduce((a:any,b:any) => {
                if (!a.find((movie:any) => movie.id === b.id)) {
                  a.push(b);
                }
                return a;
              }, []);
              state.top_rated=uniqueTopRated
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
            state.up_coming=state.up_coming.concat(payload.results);
            const uniqueUpComing = state.up_coming.reduce((a:any,b:any) => {
                if (!a.find((movie:any) => movie.id === b.id)) {
                  a.push(b);
                }
                return a;
              }, []);
              state.up_coming=uniqueUpComing
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
