import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios';
import Swal from 'sweetalert2';

export const fetchLatestPersons=createAsyncThunk('movies/fetchLatestPersons',async()=>{
    const response=await axios.get(`${process.env.REACT_APP_MOVIE_BASEURL}/discover/movie?api_key=${process.env.REACT_APP_MOVIE_KEY}`);
    return response.data;
});

export const fetchPopularPersons=createAsyncThunk('movies/fetchPopularPersons',async(page:number)=>{
    const response=await axios.get(`${process.env.REACT_APP_MOVIE_BASEURL}/person/popular?api_key=${process.env.REACT_APP_MOVIE_KEY}&language=en-US&page=${page}`);
    return response.data;
});



type InitialState={
    latest_persons:any,
    popular_persons:any[],
}

const initialState:InitialState={
    latest_persons:{},
    popular_persons:[],
};

const personsSlice=createSlice({
    name:'persons',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchLatestPersons.fulfilled,(state,{payload})=>{
            state.latest_persons=payload.results;
        })
        builder.addCase(fetchLatestPersons.rejected,(state,{error})=>{
            console.log('error Redux',error)
            Swal.fire(
                'Error Occured',
                error.message,
                'error'
            )
        })
        builder.addCase(fetchPopularPersons.fulfilled,(state,{payload})=>{
            const li:any=[];
            payload.results.forEach((reso:any):any=>{
                li.push(reso)
            })
            state.popular_persons=payload.results;
        })
        builder.addCase(fetchPopularPersons.rejected,(state,{error})=>{
            console.log('error Redux',error)
            Swal.fire(
                'Error Occured',
                error.message,
                'error'
            )
        })
    }
});


export const getLatestPersons=(state:any)=>state.personReducer.latest_persons;
export const getPopularPersons=(state:any)=>state.personReducer.popular_persons;
export default personsSlice.reducer;
