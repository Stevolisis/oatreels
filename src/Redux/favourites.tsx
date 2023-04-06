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
    reducers:{},
});


export default favouriteSlice.reducer;
