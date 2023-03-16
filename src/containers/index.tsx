import MainSlider from '../components/MainSlider';
import Sliders from '../components/Sliders';
import Sidelist from "../components/Sidelist";
import Carousel from '../components/Carousel';
import Listings from '../components/Listings';
import Footer from '../components/Footer';
import { useEffect } from 'react';
import { fetchMovies, fetchTrends, getTrends } from '../Redux/movies';
import { UseAppDispatch, useAppSelector } from '../Redux/store';

export default function Home(){
    const slides:string[]=['/pexel1.jpg','/pexel8.jpg','/pexel9.jpg','/pexel11.jpg','/pexel13.jpg',
    '/pexel14.jpg','/pexel1.jpg','/pexel8.jpg','/pexel9.jpg'];
    const dispatch=UseAppDispatch();
    const trends=useAppSelector(getTrends);

    useEffect(()=>{
        console.log(window.innerWidth)
    },[window.innerWidth])

    useEffect(()=>{
        dispatch(fetchMovies());
        dispatch(fetchTrends());
    },[])

    return(
        <>
            <div className="text-primary">
                
                <div className='md:ml-[120px] ml-0 px-3 sm:px-5'>
                    <MainSlider slides={slides}/>
                    <Sliders slides={slides}/> 
                    <Carousel slides={trends} heading='Trending Movies'/>
                    <Carousel slides={slides}/>
                    <Listings slides={slides}/>
                    <Carousel slides={slides}/>
                    <Carousel slides={slides}/>
                    <Listings slides={slides}/>
                    <Footer/>
                </div>
            </div>
        </>
    )
}