import MainSlider from '../components/MainSlider';
import RectangleSliders from '../components/RectangleSliders';
import Carousel from '../components/Carousel';
import Listings from '../components/Listings';
import Footer from '../components/Footer';
import { useEffect } from 'react';
import { fetchLatestMovies, fetchMovies, fetchPopularMovies, fetchTopRatedMovies, fetchTrends, fetchUpComingMovies, getLatest, getMovies, getPopular, getTopRated, getTrends, getUpComing } from '../Redux/movies';
import { UseAppDispatch, useAppSelector } from '../Redux/store';
import { fetchPopularPersons, getPopularPersons } from '../Redux/persons';
import CircleSlider from '../components/CircleSliders';

export default function Home(){
    const slides:string[]=['/pexel1.jpg','/pexel8.jpg','/pexel9.jpg','/pexel11.jpg','/pexel13.jpg',
    '/pexel14.jpg','/pexel1.jpg','/pexel8.jpg','/pexel9.jpg'];
    const dispatch=UseAppDispatch();
    const trends=useAppSelector(getTrends);
    const popular=useAppSelector(getPopular);
    const movies=useAppSelector(getMovies);
    const upComing=useAppSelector(getUpComing);
    const topRated=useAppSelector(getTopRated);
    const popularPersons=useAppSelector(getPopularPersons);
    const arr:any=[{id:1,data:'nice'},{id:2,data:'job'},{id:3,data:'doing'},{id:3,data:'this'}];
    const newArr:any=arr.filter((fill:any,i:number)=>arr.indexOf(fill)===i);
    // console.log('Neww Arr',newArr)

    useEffect(()=>{
        console.log(window.innerWidth)
    },[window.innerWidth])

    useEffect(()=>{
        dispatch(fetchMovies(4));
        dispatch(fetchMovies(3));
        dispatch(fetchMovies(2));
        dispatch(fetchTrends(2));
        dispatch(fetchTrends(3));
        dispatch(fetchPopularMovies(2));
        dispatch(fetchPopularMovies(3));
        dispatch(fetchLatestMovies(2));
        dispatch(fetchLatestMovies(3));
        dispatch(fetchUpComingMovies(2));
        dispatch(fetchUpComingMovies(3));
        dispatch(fetchTopRatedMovies(2));
        dispatch(fetchTopRatedMovies(3));
        dispatch(fetchPopularPersons(3));
        dispatch(fetchPopularPersons(2));
    },[])

    return(
        <>
            <div className="text-primary">
                
                <div className='md:ml-[120px] ml-0 px-3 sm:px-5'>
                    <MainSlider slides={popular}/>
                    <RectangleSliders slides={topRated} heading='Top Rated Movies'/> 
                    <Carousel slides={trends} heading='Trending Movies'/>
                    <Carousel slides={popular} heading='Popular Movies'/>
                    <Listings slides={slides} heading='Top Box Office'/>
                    <Carousel slides={movies} heading='Movies'/>
                    <Carousel slides={upComing} heading='UpComing Movies'/>
                    <CircleSlider gender={2} slides={popularPersons} heading='Popular Actors'/>
                    <CircleSlider gender={1} slides={popularPersons} heading='Popular Actresses'/>
                    <Listings slides={slides} heading='Top Box Office'/>
                    <Footer/>
                </div>
            </div>
        </>
    )
}