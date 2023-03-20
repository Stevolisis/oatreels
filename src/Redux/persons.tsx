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
            state.latest_persons=state.latest_persons.concat(payload.results);
            const uniqueLatestPersons = state.latest_persons.reduce((a:any,b:any) => {
                if (!a.find((movie:any) => movie.id === b.id)) {
                  a.push(b);
                }
                return a;
              }, []);
              state.latest_persons=uniqueLatestPersons;
        })
        builder.addCase(fetchLatestPersons.rejected,(state,{error})=>{
            Swal.fire(
                'Error Occured',
                error.message,
                'error'
            )
        })
        builder.addCase(fetchPopularPersons.fulfilled,(state,{payload})=>{
            state.popular_persons=state.popular_persons.concat(payload.results);
            const uniquePopularPersons = state.popular_persons.reduce((a:any,b:any) => {
                if (!a.find((movie:any) => movie.id === b.id)) {
                  a.push(b);
                }
                return a;
              }, []);
              state.popular_persons=uniquePopularPersons
        })
        builder.addCase(fetchPopularPersons.rejected,(state,{error})=>{
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
