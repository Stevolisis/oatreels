import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import axios from 'axios';
import Swal from 'sweetalert2';

export const fetchTv=createAsyncThunk('tv/fetchTv',async(id:number)=>{
    const response=await axios.get(`${process.env.REACT_APP_MOVIE_BASEURL}/tv/${id}?api_key=${process.env.REACT_APP_MOVIE_KEY}&language=en-US&append_to_response=videos,images`);
    return response.data;
});

export const fetchCasts=createAsyncThunk('tv/fetchCasts',async(id:number)=>{
    const response=await axios.get(`${process.env.REACT_APP_MOVIE_BASEURL}/tv/${id}/credits?api_key=${process.env.REACT_APP_MOVIE_KEY}&language=en-US`);
    return response.data;
});

export const fetchRecommendedTvs=createAsyncThunk('tv/fetchRecommendedTvs',async({id:id,page:page}:any)=>{
    const response=await axios.get(`${process.env.REACT_APP_MOVIE_BASEURL}/tv/${id}/recommendations?api_key=${process.env.REACT_APP_MOVIE_KEY}&page=${page}&language=en-US`);
    return response.data;
});

export const fetchSimilarTvs=createAsyncThunk('tv/fetchSimilarTvs',async({id:id,page:page}:any)=>{
    const response=await axios.get(`${process.env.REACT_APP_MOVIE_BASEURL}/tv/${id}/similar?api_key=${process.env.REACT_APP_MOVIE_KEY}&page=${page}&language=en-US`);
    return response.data;
});





type InitialState={
    tv:any,
    casts:any[],
    crew:any[],
    seasons:any[],
    recommended_tvs:any[],
    reviews:any[],
    similar_tvs:any[],
    videos:any[],
}

const initialState:InitialState={
    tv:{},
    casts:[],
    crew:[],
    reviews:[],
    seasons:[],
    videos:[],
    recommended_tvs:[],
    similar_tvs:[],
};

const tvSlice=createSlice({
    name:'tv',
    initialState,
    reducers:{
        resettv:(state)=>{
            state.tv={};
        },
        resetRecommendedtvs:(state)=>{
            state.recommended_tvs=[];
        },
        resetSimilartvs:(state)=>{
            state.similar_tvs=[];
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchTv.fulfilled,(state,{payload})=>{
            state.tv=payload;
            state.seasons=payload.seasons;
            state.videos=payload.videos.results;
        })
        builder.addCase(fetchTv.rejected,(state,{error})=>{
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
            Swal.fire(
                'Error Occured',
                error.message,
                'error'
            )
        })
        builder.addCase(fetchRecommendedTvs.fulfilled,(state,{payload})=>{
            state.recommended_tvs=state.recommended_tvs.concat(payload.results);
            const uniqueRecommended_tvs = state.recommended_tvs.reduce((a:any,b:any) => {
                if (!a.find((tv:any) => tv.id === b.id)) {
                  a.push(b);
                }
                return a;
              }, []);
              state.recommended_tvs=uniqueRecommended_tvs;
        })
        builder.addCase(fetchRecommendedTvs.rejected,(state,{error})=>{
            Swal.fire(
                'Error Occured',
                error.message,
                'error'
            )
        })
        builder.addCase(fetchSimilarTvs.fulfilled,(state,{payload})=>{
            state.similar_tvs=state.similar_tvs.concat(payload.results);
            const uniqueSimilar_tvs = state.similar_tvs.reduce((a:any,b:any) => {
                if (!a.find((tv:any) => tv.id === b.id)) {
                  a.push(b);
                }
                return a;
              }, []);
              state.similar_tvs=uniqueSimilar_tvs;
        })
        builder.addCase(fetchSimilarTvs.rejected,(state,{error})=>{
            Swal.fire(
                'Error Occured',
                error.message,
                'error'
            )
        })
    }
});


export const gettv=(state:any)=>state.tvReducer.tv;
export const getCasts=(state:any)=>state.tvReducer.casts;
export const getCrew=(state:any)=>state.tvReducer.crew;
export const getReviews=(state:any)=>state.tvReducer.reviews;
export const getSeasons=(state:any)=>state.tvReducer.seasons;
export const getVideos=(state:any)=>state.tvReducer.videos;
export const getRecommendedtvs=(state:any)=>state.tvReducer.recommended_tvs;
export const getSimilartvs=(state:any)=>state.tvReducer.similar_tvs;
export const {resettv, resetRecommendedtvs, resetSimilartvs}=tvSlice.actions;
export default tvSlice.reducer;