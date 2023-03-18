import { useEffect } from 'react';
import Carousel from '../components/Carousel';
import RectangleSlider from '../components/RectangleSliders';
import { fetchTrends, getTrends } from '../Redux/movies';
import { UseAppDispatch, useAppSelector } from "../Redux/store";
import { fetchPopularTvs, fetchTopRatedTvs, fetchTvOnAir, fetchTvOnAirToday, getPopularTvs, getTopRatedTvs, getTvOnAir, getTvOnAirToday } from '../Redux/tv';

export default function TvShows(){
    const dispatch=UseAppDispatch();
    const TvsOnAirToday=useAppSelector(getTvOnAirToday);
    const TvsOnAir=useAppSelector(getTvOnAir);
    const popularTvs=useAppSelector(getPopularTvs);
    const topRatedTvs=useAppSelector(getTopRatedTvs);
    const trends=useAppSelector(getTrends);


    useEffect(()=>{
        dispatch(fetchTvOnAirToday(1));
        dispatch(fetchTvOnAirToday(2));
        dispatch(fetchTvOnAir(1));
        dispatch(fetchTvOnAir(2));
        dispatch(fetchTopRatedTvs(1));
        dispatch(fetchTopRatedTvs(2));
        dispatch(fetchTrends({type:'tv',page:2}));
        dispatch(fetchTrends({type:'tv',page:3}));
        dispatch(fetchPopularTvs(1));
        dispatch(fetchPopularTvs(2));
    },[])
    

    return(
        <>
        <div className="text-primary">                
            <div className='md:ml-[120px] ml-0 px-3 sm:px-5'>
            <RectangleSlider slides={TvsOnAirToday} heading="Today's Tv Shows"/>
            <Carousel slides={TvsOnAir} heading='Tv Shows On Air'/>
            <Carousel slides={topRatedTvs} heading='Top Rated Tvs'/>
            <Carousel slides={trends} heading='Trending Tv Shows'/>
            <RectangleSlider slides={popularTvs} heading="Popular Tv Shows"/>
            </div>
        </div>
        </>
    )
}