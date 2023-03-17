import MainSlider from '../components/MainSlider';
import RectangleSliders from '../components/RectangleSliders';
import Carousel from '../components/Carousel';
import Listings from '../components/Listings';
import Footer from '../components/Footer';
import { useEffect } from 'react';
import { fetchLatestMovies, fetchMovies, fetchPopularMovies, fetchTopRatedMovies, fetchTrends, fetchUpComingMovies, getLatest, getPopular, getTopRated, getTrends, getUpComing } from '../Redux/movies';
import { UseAppDispatch, useAppSelector } from '../Redux/store';
import { fetchPopularPersons, getPopularPersons } from '../Redux/persons';
import CircleSlider from '../components/CircleSliders';

export default function Home(){
    const slides:string[]=['/pexel1.jpg','/pexel8.jpg','/pexel9.jpg','/pexel11.jpg','/pexel13.jpg',
    '/pexel14.jpg','/pexel1.jpg','/pexel8.jpg','/pexel9.jpg'];
    const dispatch=UseAppDispatch();
    const trends=useAppSelector(getTrends);
    const popular=useAppSelector(getPopular);
    const latest=useAppSelector(getLatest);
    const upComing=useAppSelector(getUpComing);
    const topRated=useAppSelector(getTopRated);
    const popularPersons=useAppSelector(getPopularPersons);

    useEffect(()=>{
        console.log(window.innerWidth)
    },[window.innerWidth])

    useEffect(()=>{
        dispatch(fetchMovies());
        dispatch(fetchTrends());
        dispatch(fetchPopularMovies());
        dispatch(fetchLatestMovies());
        dispatch(fetchUpComingMovies());
        dispatch(fetchTopRatedMovies());
        dispatch(fetchPopularPersons());
    },[])

    return(
        <>
            <div className="text-primary">
                
                <div className='md:ml-[120px] ml-0 px-3 sm:px-5'>
                    <MainSlider slides={slides}/>
                    <RectangleSliders slides={topRated} heading='Top Rated Movies'/> 
                    <Carousel slides={trends} heading='Trending Movies'/>
                    <Carousel slides={popular} heading='Popular Movies'/>
                    <Listings slides={slides} heading='Top Box Office'/>
                    {/* <Carousel slides={latest} heading='Latest Movies'/> */}
                    <Carousel slides={upComing} heading='UpComing Movies'/>
                    <CircleSlider slides={popularPersons} heading='Popular Movies Stars'/>
                    <Listings slides={slides} heading='Top Box Office'/>
                    <Footer/>
                </div>
            </div>
        </>
    )
}