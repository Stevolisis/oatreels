import { lazy, Suspense, useEffect } from 'react';
import { UseAppDispatch, useAppSelector } from '../Redux/store';
import { fetchLatestMovies, fetchMovies, fetchPopularMovies, fetchTopRatedMovies, fetchTrends, fetchUpComingMovies, getLatest, getMovies, getPopular, getTopRated, getTrends, getUpComing } from '../Redux/movies';
import { fetchPopularPersons, getPopularPersons } from '../Redux/persons';
import { fetchPopularTvs, getPopularTvs } from '../Redux/tvs';

import MainSliderLoader from '../components/loaders/mainSlides';
import CarouselLoader from '../components/loaders/carousel';
import ListingsLoader from '../components/loaders/listings';
import CircleSliderLoader from '../components/loaders/circleSlides';
import RectangleSliderLoader from '../components/loaders/rectangleSlides';

const MainSlider = lazy(() => import('../components/MainSlider'));
const RectangleSliders = lazy(() => import('../components/RectangleSlider'));
const Carousel = lazy(() => import('../components/Carousel'));
const Listings = lazy(() => import('../components/Listings'));
const CircleSlider = lazy(() => import('../components/CircleSlider'));

export default function Home() {
  const dispatch = UseAppDispatch();
  const trends = useAppSelector(getTrends);
  const popular = useAppSelector(getPopular);
  const movies = useAppSelector(getMovies);
  const upComing = useAppSelector(getUpComing);
  const topRated = useAppSelector(getTopRated);
  const popularPersons = useAppSelector(getPopularPersons);
  const popularTvs = useAppSelector(getPopularTvs);

  useEffect(() => {
    dispatch(fetchMovies(4));
    dispatch(fetchMovies(3));
    dispatch(fetchMovies(2));
  }, []);
  
  useEffect(() => {
    dispatch(fetchTrends({ type: 'movie', page: 2 }));
    dispatch(fetchTrends({ type: 'movie', page: 3 }));
  }, []);
  
  useEffect(() => {
    dispatch(fetchPopularMovies(2));
    dispatch(fetchPopularMovies(3));
  }, []);
  
  useEffect(() => {
    dispatch(fetchLatestMovies(2));
    dispatch(fetchLatestMovies(3));
  }, []);
  
  useEffect(() => {
    dispatch(fetchUpComingMovies(2));
    dispatch(fetchUpComingMovies(3));
  }, []);
  
  useEffect(() => {
    dispatch(fetchTopRatedMovies(2));
    dispatch(fetchTopRatedMovies(3));
  }, []);
  
  useEffect(() => {
    dispatch(fetchPopularPersons(3));
    dispatch(fetchPopularPersons(2));
  }, []);
  
  useEffect(() => {
    dispatch(fetchPopularTvs(3));
    dispatch(fetchPopularTvs(2));
  }, []);
  

  return (
    <>
    <div className="text-txtPrimary">
      <div className='md:ml-[120px] ml-0 px-3 sm:px-5'>
        <Suspense fallback={<MainSliderLoader/>}>
          <MainSlider slides={popular} />
        </Suspense>
        <Suspense fallback={<RectangleSliderLoader/>}>
          <RectangleSliders slides={topRated} heading='Top Rated Movies' />
        </Suspense>
        <Suspense fallback={<CarouselLoader/>}>
          <Carousel slides={trends} heading='Trending Movies' />
        </Suspense>
        <Suspense fallback={<CarouselLoader/>}>
          <Carousel slides={popular} heading='Popular Movies' />
        </Suspense>
        <Suspense fallback={<CarouselLoader/>}>
          <Carousel slides={movies} heading='Movies' />
        </Suspense>
        <Suspense fallback={<CarouselLoader/>}>
            <Carousel slides={upComing} heading='UpComing Movies'/>
        </Suspense>
        <Suspense fallback={<CarouselLoader/>}>
            <CircleSlider character={false} gender={2} slides={popularPersons} heading='Popular Actors'/>
        </Suspense>
        <Suspense fallback={<CircleSliderLoader/>}>
            <CircleSlider character={false} gender={1} slides={popularPersons} heading='Popular Actresses'/>
        </Suspense>
        <Suspense fallback={<RectangleSliderLoader/>}>
            <RectangleSliders tv={true} slides={popularTvs} heading='Popular Tv Shows'/>
        </Suspense>

                </div>
            </div>
        </>
    )
}