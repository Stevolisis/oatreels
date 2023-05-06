import { createSlice } from '@reduxjs/toolkit'


type InitialState={
    favourites:any[],
    trigger:boolean
}

const initialState:InitialState={
    favourites:[],
    trigger:false
};

const favouriteSlice=createSlice({
    name:'favourites',
    initialState,
    reducers:{
        addFavourite:(state,{payload})=>{
            let favouriteIndex=state.favourites.findIndex(movie=>movie.id===payload.id);
            if(favouriteIndex < 0){
                state.favourites=[...state.favourites,{id:payload.id, poster_path:payload.poster_path, vote_average:payload.vote_average||'', genre_ids:payload.genre_ids||payload.genres||'', name:payload.original_title||payload.original_name||payload.name, tv:payload.original_name? true : false, episode_count:payload.episode_count||''}];
                state.trigger=true;
            }
        },
        offTrigger:(state)=>{
            state.trigger=false;
        },
        deleteFavourite:(state,{payload})=>{
            state.trigger=true;
            let favouriteIndex=state.favourites.findIndex(movie=>movie.id===payload);
            if(favouriteIndex >=0) state.favourites=state.favourites.filter(movie=>movie.id!==payload);
        },
        clearFavourite:(state)=>{
            state.favourites=[];
        }
    },
});


export const getFavourites=(state:any)=>state.favouriteReducer.favourites;
export const getFavTrigger=(state:any)=>state.favouriteReducer.trigger;
export const {addFavourite, offTrigger, deleteFavourite, clearFavourite}=favouriteSlice.actions;
export default favouriteSlice.reducer;
