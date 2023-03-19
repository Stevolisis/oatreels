import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import axios from 'axios';
import Swal from 'sweetalert2';

export const fetchMovie=createAsyncThunk('movie/fetchMovie',async(id)=>{
    const response=await axios.get(`${process.env.REACT_APP_MOVIE_BASEURL}/movie/${id}?api_key=${process.env.REACT_APP_MOVIE_KEY}&language=en-US`);
    return response.data;
});





type InitialState={
    movie:any[],
    casts:any[],
    recommended_movies:[],
    reviews:any[],
    similar_movies:any[],
    videos:any[],
}

const initialState:InitialState={
    movie:[],
    casts:[],
    recommended_movies:[],
    reviews:[],
    similar_movies:[],
    videos:[],
};

const movieSlice=createSlice({
    name:'movie',
    initialState,
    reducers:{},
});


export const getMovie=(state:any)=>state.movieReducer.movie;
export default movieSlice.reducer;