import MainSlider from '../components/MainSlider';
import Sliders from '../components/Sliders';
import Sidelist from "../components/Sidelist";
import Carousel from '../components/Carousel';
import Listings from '../components/Listings';
import Footer from '../components/Footer';
import { useEffect } from 'react';
import { fetchLatestMovies, fetchMovies, fetchPopularMovies, fetchTopRatedMovies, fetchTrends, fetchUpComingMovies, getLatest, getPopular, getTopRated, getTrends, getUpComing } from '../Redux/movies';
import { UseAppDispatch, useAppSelector } from '../Redux/store';

export default function Home(){
    const slides:string[]=['/pexel1.jpg','/pexel8.jpg','/pexel9.jpg','/pexel11.jpg','/pexel13.jpg',
    '/pexel14.jpg','/pexel1.jpg','/pexel8.jpg','/pexel9.jpg'];
    const dispatch=UseAppDispatch();
    const trends=useAppSelector(getTrends);
    const popular=useAppSelector(getPopular);
    const latest=useAppSelector(getLatest);
    const upComing=useAppSelector(getUpComing);
    const topRated=useAppSelector(getTopRated);

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
    },[])

    return(
        <>
            <div className="text-primary">
                
                <div className='md:ml-[120px] ml-0 px-3 sm:px-5'>
                    <MainSlider slides={slides}/>
                    <Sliders slides={topRated} heading='Top Rated Movies'/> 
                    <Carousel slides={trends} heading='Trending Movies'/>
                    <Carousel slides={popular} heading='Popular Movies'/>
                    <Listings slides={slides}/>
                    {/* <Carousel slides={latest} heading='Latest Movies'/> */}
                    <Carousel slides={upComing} heading='UpComing Movies'/>
                    <Listings slides={slides} heading='Top Box Office'/>
                    <Footer/>
                </div>
            </div>
        </>
    )
}