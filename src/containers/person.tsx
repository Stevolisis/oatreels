import { useEffect, useState } from "react";
import { FaHeart, FaFilm, FaPeopleArrows, FaPlay, FaRegArrowAltCircleUp, FaRocket, FaShare, FaStar, FaPlayCircle } from "react-icons/fa";
import { useParams } from "react-router-dom"
import Carousel from "../components/Carousel";
import CircleSlider from "../components/CircleSliders";
import SquareSlider from "../components/SquareSlider";
import {  } from "../Redux/tv";
import { UseAppDispatch, useAppSelector } from "../Redux/store";
import RectangleSlider from "../components/RectangleSliders";
import { fetchMovieCredits, fetchPerson, fetchTvCredits, getMovieCredits, getPerson, getTvCredits, resetMovieCredits, resetPerson, resetTvCredits } from "../Redux/person";

export default function Person(){
    const {id}:any=useParams();
    const dispatch=UseAppDispatch();
    const person=useAppSelector(getPerson);
    const movie_credits:any=useAppSelector(getMovieCredits);
    const tv_credits:any=useAppSelector(getTvCredits);

    useEffect(()=>{
        if(id){
            dispatch(resetPerson());
            dispatch(resetMovieCredits());
            dispatch(resetTvCredits());
            dispatch(fetchPerson(id));
            dispatch(fetchMovieCredits(id));
            dispatch(fetchTvCredits(id));
        }
    },[id]);

    console.log('hjjj',person.images&&person.images&&person.images.profiles)
    // function getGenre(id:number){
    //     return genres.filter((genre:any)=>genre.id===id);
        
    // }
    

    return(
        <>
        <div className="text-primary">                
            <div className='md:ml-[120px] ml-0'>
                <div style={{ backgroundImage: `linear-gradient(180deg,rgba(12, 11, 8,0.4),rgba(12, 11, 8,0.7),rgba(12, 11, 8,0.9),rgba(12, 11, 8,1)),url(${person&&(process.env.REACT_APP_MOVIE_IMAGE+'/w780'+person.profile_path)})`}} 
                className='bgImageGrad w-full h-full text-txtPrimary px-5 sm:px-0'>
                    <div className="py-5 sm:py-7 sm:px-16 md:px-20">
                        <p className="text-sm sm:text-base font-semibold text-txtPrimary opacity-70 sm:opacity-90">Home | persons | {person && person.original_title||person.name} </p>
                    </div>
                    <div className="py-[6rem] pb-10 sm:py-28 sm:px-20 sm:pb-10 md:py-40 md:px-36 md:pb-20">
                        <div>
                            <p className="text-brSecondary font-semibold text-sm sm:text-[17px] md:text-lg">WATCH</p>
                            <p className="font-bold text-3xl sm:text-4xl md:text-5xl ">{person && person.original_title||person.name}</p>
                        </div>
                        <div className="flex items-center py-4 flex-wrap">
                            <p className="py-2 px-5 sm:px-6 mx-1 sm:mx-2 my-1 text-[11px] sm:text-sm rounded-full border border-txtPrimary bg-bgPrimary  flex justify-center items-center">{person.known_for_department}</p>
                        </div>
                        <div className="flex items-center py-4 flex-wrap text-bgDark">
                            {/* <button className="flex rounded-lg items-center bg-brPrimary p-[14px] sm:p-5 mx-1 sm:mx-2 my-1 text-[12px] sm:text-sm w-[47%] sm:w-[200px] justify-center">
                                <FaPlay className="text-[12px] sm:text-[15px] mr-2"/>Watch Now</button>
                            <button className="flex rounded-lg items-center bg-brPrimary p-[14px] sm:p-5 mx-1 sm:mx-2 my-1 text-[12px] sm:text-sm w-[47%] sm:w-[200px] justify-center">
                                <FaHeart className="text-[12px] sm:text-[15px] mr-1 sm:mr-2"/>Add to Favourites</button> */}
                            <button className="flex rounded-lg items-center bg-brPrimary p-4 sm:p-5 mx-1 sm:mx-2 my-1 text-[12px] sm:text-sm">
                                <FaShare  className="text-[12px] sm:text-[15px]"/></button>
                        </div>
                    </div>                    
                </div>

                <div className="py-5 text-txtPrimary flex justify-between">
                    <div className="flex-2 hidden sm:block">
                        <img className="w-[190px] h-[280px]" src={person&&(process.env.REACT_APP_MOVIE_IMAGE+'/w500'+person.poster_path)} alt='movie poster'/>
                    </div>
                    <div className="flex-1 px-5 sm:px-12 md:px-14">
                        <div>
                            <p className="font-semibold text-xl sm:text-2xl md:text-3xl">{person&&person.original_title||person.name}</p>
                        </div>
                        <div>
                            <p className="py-5 text-[15px] sm:text-base">{person&&person.biography}</p>
                        </div>
                        <div className="flex mb-2 sm:mb-3 flex-wrap">
                            {/* <div className="flex mx-2 my-1 items-center"><FaRocket className="text-[12px]"/> <p className="px-2 text-[11px] flex">{tv&&tv.release_date||tv.first_air_date}</p></div>
                            <div className="flex mx-2 my-1 items-center"><FaRegArrowAltCircleUp className="text-[12px]"/> <p className="px-2 text-[11px] flex">{tv&&tv.vote_count}</p></div>
                            <div className="flex mx-2 my-1 items-center"><FaStar className="text-[12px]"/> <p className="px-2 text-[11px] flex">{tv.vote_average&&tv.vote_average.toFixed(2)}</p></div>
                            <div className="flex mx-2 my-1 items-center"><FaFilm className="text-[12px]"/> <p className="px-2 text-[11px] flex">{tv&&tv.number_of_seasons}</p></div>
                            <div className="flex mx-2 my-1 items-center"><FaPlayCircle className="text-[12px]"/> <p className="px-2 text-[11px] flex">{tv&&tv.number_of_episodes}</p></div> */}
                        </div>
                        <div className="text-sm sm:text-base">
                            <p className='py-3 border-b border-b-brSecondary text-brSecondary'>
                                <span className="text-base text-txtPrimary sm:text-lg font-semibold">Birthday:
                                </span>{person.birthday}</p>
                            {person.deathday&&<p className='py-3 border-b border-b-brSecondary text-brSecondary'>
                                <span className="text-base text-txtPrimary sm:text-lg font-semibold">Death Day: 
                                </span>{person.birthday}</p>}
                            <p className='py-3 border-b border-b-brSecondary text-brSecondary'>
                                <span className="text-base text-txtPrimary sm:text-lg font-semibold">Place Of Birth: 
                                </span>{person.place_of_birth}</p>
                        </div>

                        <div className="flex justify-start items-center py-4 flex-wrap text-bgDark">
                            {/* <button onClick={()=>setCheckVideos(!checkVideos)} className="flex rounded-lg items-center bg-brPrimary p-[12px] sm:p-3 mx-1 sm:mx-2 my-1 text-[12px] sm:text-sm w-[43%] sm:w-[180px] justify-center">
                                <FaVideo className="text-[12px] sm:text-[15px] mr-1 sm:mr-2"/>Vidoes</button> */}
                            <button className="flex rounded-lg items-center bg-brPrimary p-[12px] sm:p-3 mx-1 sm:mx-2 my-1 text-[12px] sm:text-sm w-[43%] sm:w-[180px] justify-center">
                                <FaPeopleArrows className="text-[12px] sm:text-[15px] mr-1 sm:mr-2"/>All Crew</button>
                    </div>
                    </div>

                </div>


                <div className="px-3 sm:px-2 md:px-0">
                    {/* {checkPhotos&&<div id="photos"><RectangleSlider heading='Photos' slides={photos}/></div>} */}
                    {person.images&&person.images.profiles&&<div id="crew"><SquareSlider heading='Photos' slides={person.images.profiles} character={true}/></div>}
                    {/* {seasons&&<div id="Seasons"><Carousel tv={true} heading='Seasons' slides={seasons}/></div>}
                    <CircleSlider heading='Casts' slides={casts} character={true} gender={2}/>
                    <CircleSlider heading='Casts' slides={casts} character={true} gender={1}/>
                    <Carousel tv={true} heading='Similar Tvs' slides={similarTvs}/> */}
                    <Carousel heading='Movies Acted' slides={movie_credits}/>  
                </div>
            </div>
        </div>

        </>
    )
}