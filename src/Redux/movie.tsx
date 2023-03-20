import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import axios from 'axios';
import Swal from 'sweetalert2';

export const fetchMovie=createAsyncThunk('movie/fetchMovie',async(id:number)=>{
    const response=await axios.get(`${process.env.REACT_APP_MOVIE_BASEURL}/movie/${id}?api_key=${process.env.REACT_APP_MOVIE_KEY}&language=en-US&append_to_response=videos,images`);
    return response.data;
});

export const fetchCasts=createAsyncThunk('movie/fetchCasts',async(id:number)=>{
    const response=await axios.get(`${process.env.REACT_APP_MOVIE_BASEURL}/movie/${id}/credits?api_key=${process.env.REACT_APP_MOVIE_KEY}&language=en-US`);
    return response.data;
});

export const fetchReviews=createAsyncThunk('movie/fetchReviews',async({id:id,page:page}:any)=>{
    const response=await axios.get(`${process.env.REACT_APP_MOVIE_BASEURL}/movie/${id}/reviews?api_key=${process.env.REACT_APP_MOVIE_KEY}&page=${page}&language=en-US`);
    return response.data;
});

export const fetchRecommendedMovies=createAsyncThunk('movie/fetchRecommendedMovies',async({id:id,page:page}:any)=>{
    const response=await axios.get(`${process.env.REACT_APP_MOVIE_BASEURL}/movie/${id}/recommendations?api_key=${process.env.REACT_APP_MOVIE_KEY}&page=${page}&language=en-US`);
    return response.data;
});

export const fetchSimilarMovies=createAsyncThunk('movie/fetchSimilarMovies',async({id:id,page:page}:any)=>{
    const response=await axios.get(`${process.env.REACT_APP_MOVIE_BASEURL}/movie/${id}/similar?api_key=${process.env.REACT_APP_MOVIE_KEY}&page=${page}&language=en-US`);
    return response.data;
});





type InitialState={
    movie:any,
    casts:any[],
    crew:any[],
    photos:any[],
    recommended_movies:any[],
    reviews:any[],
    similar_movies:any[],
    videos:any[],
}

const initialState:InitialState={
    movie:{},
    casts:[],
    crew:[],
    reviews:[],
    photos:[],
    videos:[],
    recommended_movies:[],
    similar_movies:[],
};

const movieSlice=createSlice({
    name:'movie',
    initialState,
    reducers:{
        resetMovie:(state)=>{
            state.movie={};
        },
        resetRecommendedMovies:(state)=>{
            state.recommended_movies=[];
        },
        resetSimilarMovies:(state)=>{
            state.similar_movies=[];
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchMovie.fulfilled,(state,{payload})=>{
            state.movie=payload;
            state.photos=payload.images.backdrops;
            state.videos=payload.videos.results;
        })
        builder.addCase(fetchMovie.rejected,(state,{error})=>{
            console.log('error Redux',error)
            Swal.fire(
                'Error Occured',
                error.message,
                'error'
            )
        })
        builder.addCase(fetchCasts.fulfilled,(state,{payload})=>{
            state.casts=payload.cast;
            state.crew=payload.crew;
        })
        builder.addCase(fetchCasts.rejected,(state,{error})=>{
            console.log('error Redux',error)
            Swal.fire(
                'Error Occured',
                error.message,
                'error'
            )
        })
        builder.addCase(fetchReviews.fulfilled,(state,{payload})=>{
            state.reviews=state.reviews.concat(payload.results);
            const uniqueReviews = state.reviews.reduce((a:any,b:any) => {
                if (!a.find((review:any) => review.id === b.id)) {
                  a.push(b);
                }
                return a;
              }, []);
              state.reviews=uniqueReviews
        })
        builder.addCase(fetchReviews.rejected,(state,{error})=>{
            console.log('error Redux',error)
            Swal.fire(
                'Error Occured',
                error.message,
                'error'
            )
        })
        builder.addCase(fetchRecommendedMovies.fulfilled,(state,{payload})=>{
            state.recommended_movies=state.recommended_movies.concat(payload.results);
            const uniqueRecommended_movies = state.recommended_movies.reduce((a:any,b:any) => {
                if (!a.find((movie:any) => movie.id === b.id)) {
                  a.push(b);
                }
                return a;
              }, []);
              state.recommended_movies=uniqueRecommended_movies
        })
        builder.addCase(fetchRecommendedMovies.rejected,(state,{error})=>{
            console.log('error Redux',error)
            Swal.fire(
                'Error Occured',
                error.message,
                'error'
            )
        })
        builder.addCase(fetchSimilarMovies.fulfilled,(state,{payload})=>{
            state.similar_movies=state.similar_movies.concat(payload.results);
            const uniqueSimilar_movies = state.similar_movies.reduce((a:any,b:any) => {
                if (!a.find((movie:any) => movie.id === b.id)) {
                  a.push(b);
                }
                return a;
              }, []);
              state.similar_movies=uniqueSimilar_movies
        })
        builder.addCase(fetchSimilarMovies.rejected,(state,{error})=>{
            console.log('error Redux',error)
            Swal.fire(
                'Error Occured',
                error.message,
                'error'
            )
        })
    }
});


export const getMovie=(state:any)=>state.movieReducer.movie;
export const getCasts=(state:any)=>state.movieReducer.casts;
export const getCrew=(state:any)=>state.movieReducer.crew;
export const getReviews=(state:any)=>state.movieReducer.reviews;
export const getPhotos=(state:any)=>state.movieReducer.photos;
export const getVideos=(state:any)=>state.movieReducer.videos;
export const getRecommendedMovies=(state:any)=>state.movieReducer.recommended_movies;
export const getSimilarMovies=(state:any)=>state.movieReducer.similar_movies;
export const {resetMovie, resetRecommendedMovies, resetSimilarMovies}=movieSlice.actions;
export default movieSlice.reducer;