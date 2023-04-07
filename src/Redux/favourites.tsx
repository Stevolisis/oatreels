import { createSlice } from '@reduxjs/toolkit'


type InitialState={
    favourites:any[],
}

const initialState:InitialState={
    favourites:[]
};

const favouriteSlice=createSlice({
    name:'favourites',
    initialState,
    reducers:{
        addFavourite:(state,{payload})=>{
            let favouriteIndex=state.favourites.findIndex(movie=>movie.id===payload.id);
            console.log(favouriteIndex);
            if(favouriteIndex < 0) state.favourites=[...state.favourites,{id:payload.id}]
        },
        deleteFavourite:(state,{payload})=>{
            let favouriteIndex=state.favourites.findIndex(movie=>movie.id===payload.id);
            if(favouriteIndex >=0) state.favourites=state.favourites.filter(movie=>movie.id===payload);
        }
    },
});


export const getFavourites=(state:any)=>state.favouriteReducer.favourites;
export const {addFavourite, deleteFavourite}=favouriteSlice.actions;
export default favouriteSlice.reducer;
