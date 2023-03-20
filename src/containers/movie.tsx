import { useEffect, useState } from "react";
import { FaHeart, FaImages, FaMoneyBill, FaPlay, FaRegArrowAltCircleUp, FaRocket, FaShare, FaStar, FaVideo } from "react-icons/fa";
import { useParams } from "react-router-dom"
import Carousel from "../components/Carousel";
import { fetchMovie, fetchRecommendedMovies, fetchSimilarMovies, getMovie, getRecommendedMovies, getSimilarMovies, resetMovie, resetRecommendedMovies, resetSimilarMovies } from "../Redux/movie";
import { getGenres } from "../Redux/movies";
import { UseAppDispatch, useAppSelector } from "../Redux/store";

export default function Movie(){
    const {id}:any=useParams();
    const dispatch=UseAppDispatch();
    const movie:any=useAppSelector(getMovie);
    const recommendedMovies:any=useAppSelector(getRecommendedMovies);
    const similarMovies:any=useAppSelector(getSimilarMovies);
    const genres=useAppSelector(getGenres);
    const [image_path,setImage_path]=useState('')

    useEffect(()=>{
        if(id){
            dispatch(resetMovie());
            dispatch(resetRecommendedMovies());
            dispatch(resetSimilarMovies());
            dispatch(fetchMovie(id));
            dispatch(fetchRecommendedMovies({id:id,page:1}));
            dispatch(fetchRecommendedMovies({id:id,page:2}));
            dispatch(fetchSimilarMovies({id:id,page:1}));
            dispatch(fetchSimilarMovies({id:id,page:2}));
            setImage_path(movie&&process.env.REACT_APP_MOVIE_IMAGE+'/w500'+movie.backdrop_path);
        }
    },[id]);
console.log(image_path)
    // function getGenre(id:number){
    //     return genres.filter((genre:any)=>genre.id===id);
        
    // }
    const moneyFormat=new Intl.NumberFormat(undefined,{currency:"USD",style:"currency"});

    return(
        <>
        <div className="text-primary">                
            <div className='md:ml-[120px] ml-0'>
                <div style={{ backgroundImage: `linear-gradient(180deg,rgba(12, 11, 8,0.4),rgba(12, 11, 8,0.7),rgba(12, 11, 8,0.9),rgba(12, 11, 8,1)),url(${movie&&(process.env.REACT_APP_MOVIE_IMAGE+'/w780'+movie.backdrop_path)})`}} 
                className='bgImageGrad w-full h-full text-txtPrimary px-5 sm:px-0'>
                    <div className="py-5 sm:py-7 sm:px-16 md:px-20">
                        <p className="text-sm sm:text-base font-semibold text-txtPrimary opacity-70 sm:opacity-90">Home | movies | {movie && movie.original_title} </p>
                    </div>
                    <div className="py-[6rem] pb-10 sm:py-28 sm:px-20 sm:pb-10 md:py-40 md:px-36 md:pb-20">
                        <div>
                            <p className="text-brSecondary font-semibold text-sm sm:text-[17px] md:text-lg">WATCH</p>
                            <p className="font-bold text-3xl sm:text-4xl md:text-5xl ">{movie && movie.original_title}</p>
                        </div>
                        <div className="flex items-center py-4 flex-wrap">
                            {movie.genres&&movie.genres.map((genre:any,i:number)=>{
                                return <p key={i} className="py-2 px-5 sm:px-6 mx-1 sm:mx-2 my-1 text-[11px] sm:text-sm rounded-full border border-txtPrimary bg-bgPrimary  flex justify-center items-center">{genre.name}</p>
                            })}
                        </div>
                        <div className="flex items-center py-4 flex-wrap text-bgDark">
                            <button className="flex rounded-lg items-center bg-brPrimary p-[14px] sm:p-5 mx-1 sm:mx-2 my-1 text-[12px] sm:text-sm w-[47%] sm:w-[200px] justify-center">
                                <FaPlay className="text-[12px] sm:text-[15px] mr-2"/>Watch Now</button>
                            <button className="flex rounded-lg items-center bg-brPrimary p-[14px] sm:p-5 mx-1 sm:mx-2 my-1 text-[12px] sm:text-sm w-[47%] sm:w-[200px] justify-center">
                                <FaHeart className="text-[12px] sm:text-[15px] mr-1 sm:mr-2"/>Add to Favourites</button>
                            <button className="flex rounded-lg items-center bg-brPrimary p-4 sm:p-5 mx-1 sm:mx-2 my-1 text-[12px] sm:text-sm">
                                <FaShare  className="text-[12px] sm:text-[15px]"/></button>
                        </div>
                    </div>                    
                </div>

                <div className="py-5 text-txtPrimary flex justify-between">
                    <div className="flex-2 hidden sm:block">
                        <img className="w-[190px] h-[280px]" src={movie&&(process.env.REACT_APP_MOVIE_IMAGE+'/w500'+movie.poster_path)} alt='movie poster'/>
                    </div>
                    <div className="flex-1 px-5 sm:px-12 md:px-14">
                        <div>
                            <p className="font-semibold text-xl sm:text-2xl md:text-3xl">{movie&&movie.original_title}</p>
                        </div>
                        <div>
                            <p className="py-5 text-sm sm:text-base">{movie&&movie.overview}</p>
                        </div>
                        <div className="flex mb-3">
                            <div className="flex mx-2 items-center"><FaRocket className="text-[12px]"/> <p className="px-2 text-[11px] flex">{movie&&movie.release_date}</p></div>
                            <div className="flex mx-2 items-center"><FaRegArrowAltCircleUp className="text-[12px]"/> <p className="px-2 text-[11px] flex">{movie&&movie.vote_count}</p></div>
                            <div className="flex mx-2 items-center"><FaStar className="text-[12px]"/> <p className="px-2 text-[11px] flex">{movie.vote_average&&movie.vote_average.toFixed(2)}</p></div>
                            <div className="flex mx-2 items-center"><FaMoneyBill className="text-[12px]"/> <p className="px-2 text-[11px] flex">{movie&&moneyFormat.format(movie.revenue)}</p></div>
                        </div>
                        <div className="text-sm sm:text-base">
                            <p className='py-3 border-b border-b-brSecondary'>{movie&&movie.original_title}</p>
                            <p className='py-3 border-b border-b-brSecondary'>{movie&&movie.original_title}</p>
                            <p className='py-3 border-b border-b-brSecondary'>{movie&&movie.original_title}</p>
                            <p className='py-3 border-b border-b-brSecondary'>{movie&&movie.original_title}</p>
                        </div>

                        <div className="flex justify-evenly items-center py-4 flex-wrap text-bgDark">
                            <button className="flex rounded-lg items-center bg-brPrimary p-[12px] sm:p-3 mx-1 sm:mx-2 my-1 text-[12px] sm:text-sm w-[43%] sm:w-[180px] justify-center">
                                <FaImages className="text-[12px] sm:text-[15px] mr-2"/>Photos</button>
                            <button className="flex rounded-lg items-center bg-brPrimary p-[12px] sm:p-3 mx-1 sm:mx-2 my-1 text-[12px] sm:text-sm w-[43%] sm:w-[180px] justify-center">
                                <FaVideo className="text-[12px] sm:text-[15px] mr-1 sm:mr-2"/>Vidoes</button>
                    </div>
                    </div>

                </div>


                <div className="px-3 sm:px-0">
                    <Carousel heading='Similar Movies' slides={similarMovies}/>
                    <Carousel heading='Recommended Movies' slides={recommendedMovies}/>                    
                </div>
            </div>
        </div>

        </>
    )
}