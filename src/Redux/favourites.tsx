import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios';
import Swal from 'sweetalert2';


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
        addfavourite:(state,{payload})=>{
            console.log(payload)
            state.favourites=[...state.favourites,]
        }
    },
});


export const {addfavourite}=favouriteSlice.actions;
export default favouriteSlice.reducer;
