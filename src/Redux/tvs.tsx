import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios';
import Swal from 'sweetalert2';

export const fetchTvOnAir=createAsyncThunk('tvs/fetchTvOnAir',async(page:number)=>{
    const response=await axios.get(`${process.env.REACT_APP_MOVIE_BASEURL}/tv/on_the_air?api_key=${process.env.REACT_APP_MOVIE_KEY}&language=en-US&language=en-US&page=${page}`);
    return response.data;
});

export const fetchTvOnAirToday=createAsyncThunk('tvs/fetchTvOnAirToday',async(page:number)=>{
    const response=await axios.get(`${process.env.REACT_APP_MOVIE_BASEURL}/tv/airing_today?api_key=${process.env.REACT_APP_MOVIE_KEY}&language=en-US&language=en-US&page=${page}`);
    return response.data;
});

export const fetchPopularTvs=createAsyncThunk('tvs/fetchPopularTvs',async(page:number)=>{
    const response=await axios.get(`${process.env.REACT_APP_MOVIE_BASEURL}/tv/popular?api_key=${process.env.REACT_APP_MOVIE_KEY}&language=en-US&language=en-US&page=${page}`);
    return response.data;
});

export const fetchTopRatedTvs=createAsyncThunk('tvs/fetchTopRatedTvs',async(page:number)=>{
    const response=await axios.get(`${process.env.REACT_APP_MOVIE_BASEURL}/tv/top_rated?api_key=${process.env.REACT_APP_MOVIE_KEY}&language=en-US&language=en-US&page=${page}`);
    return response.data;
});


type InitialState={
    tv_on_air:any[],
    tv_on_air_today:any[],
    popular_tvs:any[],
    top_rated_tvs:any[]
}

const initialState:InitialState={
    tv_on_air:[],
    tv_on_air_today:[],
    popular_tvs:[],
    top_rated_tvs:[]
};

const tvsSlice=createSlice({
    name:'tvs',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchTvOnAir.fulfilled,(state,{payload})=>{
            state.tv_on_air=state.tv_on_air.concat(payload.results);
            const uniqueTvOnAir = state.tv_on_air.reduce((a:any,b:any) => {
                if (!a.find((movie:any) => movie.id === b.id)) {
                  a.push(b);
                }
                return a;
              }, []);
              state.tv_on_air=uniqueTvOnAir;
        })
        builder.addCase(fetchTvOnAir.rejected,(state,{error})=>{
            Swal.fire(
                'Error Occured',
                error.message,
                'error'
            )
        })
        builder.addCase(fetchTvOnAirToday.fulfilled,(state,{payload})=>{
            state.tv_on_air_today=state.tv_on_air_today.concat(payload.results);
            const uniqueTvOnAirToday = state.tv_on_air_today.reduce((a:any,b:any) => {
                if (!a.find((movie:any) => movie.id === b.id)) {
                  a.push(b);
                }
                return a;
              }, []);
              state.tv_on_air_today=uniqueTvOnAirToday
        })
        builder.addCase(fetchTvOnAirToday.rejected,(state,{error})=>{
            Swal.fire(
                'Error Occured',
                error.message,
                'error'
            )
        })
        builder.addCase(fetchPopularTvs.fulfilled,(state,{payload})=>{
            state.popular_tvs=state.popular_tvs.concat(payload.results);
            const uniquePopfetchPopularTvs = state.popular_tvs.reduce((a:any,b:any) => {
                if (!a.find((movie:any) => movie.id === b.id)) {
                  a.push(b);
                }
                return a;
              }, []);
              state.popular_tvs=uniquePopfetchPopularTvs
        })
        builder.addCase(fetchPopularTvs.rejected,(state,{error})=>{
            Swal.fire(
                'Error Occured',
                error.message,
                'error'
            )
        })
        builder.addCase(fetchTopRatedTvs.fulfilled,(state,{payload})=>{
            state.top_rated_tvs=state.top_rated_tvs.concat(payload.results);
            const uniqueTopfetchTopRatedTvs = state.top_rated_tvs.reduce((a:any,b:any) => {
                if (!a.find((movie:any) => movie.id === b.id)) {
                  a.push(b);
                }
                return a;
              }, []);
              state.top_rated_tvs=uniqueTopfetchTopRatedTvs
        })
        builder.addCase(fetchTopRatedTvs.rejected,(state,{error})=>{
            Swal.fire(
                'Error Occured',
                error.message,
                'error'
            )
        })
    }
});


export const getTvOnAir=(state:any)=>state.tvsReducer.tv_on_air;
export const getTvOnAirToday=(state:any)=>state.tvsReducer.tv_on_air_today;
export const getPopularTvs=(state:any)=>state.tvsReducer.popular_tvs;
export const getTopRatedTvs=(state:any)=>state.tvsReducer.top_rated_tvs;
export default tvsSlice.reducer;
