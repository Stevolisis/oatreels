import { useEffect, useState } from "react";
import { FaHeart, FaFilm, FaPeopleArrows, FaPlay, FaRegArrowAltCircleUp, FaRocket, FaShare, FaStar, FaPlayCircle } from "react-icons/fa";
import { useParams } from "react-router-dom"
import Carousel from "../components/Carousel";
import CircleSlider from "../components/CircleSliders";
import SquareSlider from "../components/SquareSlider";
import VideoPlayer from "../components/video_player";
import { fetchCasts, fetchRecommendedTvs, fetchSimilarTvs, fetchTv, getCasts, getCrew, getRecommendedtvs, getSeasons, getSimilartvs, gettv, getVideos, resetRecommendedtvs, resetSimilartvs, resettv } from "../Redux/tv";
import { UseAppDispatch, useAppSelector } from "../Redux/store";
import RectangleSlider from "../components/RectangleSliders";

export default function TvShow(){
    const {id}:any=useParams();
    const dispatch=UseAppDispatch();
    const videos=useAppSelector(getVideos);
    const tv:any=useAppSelector(gettv);
    const seasons:any=useAppSelector(getSeasons);
    const casts:any=useAppSelector(getCasts);
    const crew:any=useAppSelector(getCrew);
    const recommendedTvs:any=useAppSelector(getRecommendedtvs);
    const similarTvs:any=useAppSelector(getSimilartvs);
    const [checkCrew,setCheckCrew]=useState(false);
    const [playVideo,setPlayVideo]=useState(false);
    const moneyFormat=new Intl.NumberFormat(undefined,{currency:"USD",style:"currency"});

    useEffect(()=>{
        if(id){
            dispatch(resettv());
            dispatch(resetRecommendedtvs());
            dispatch(resetSimilartvs());
            dispatch(fetchTv(id));
            dispatch(fetchCasts(id));
            dispatch(fetchRecommendedTvs({id:id,page:1}));
            dispatch(fetchRecommendedTvs({id:id,page:2}));
            dispatch(fetchSimilarTvs({id:id,page:1}));
            dispatch(fetchSimilarTvs({id:id,page:2}));
        }
    },[id]);

    
    // function getGenre(id:number){
    //     return genres.filter((genre:any)=>genre.id===id);
        
    // }
    

    return(
        <>
        {playVideo&&<VideoPlayer videos={videos} setPlayVideo={setPlayVideo}/>}
        <div className="text-primary">                
            <div className='md:ml-[120px] ml-0'>
                <div style={{ backgroundImage: `linear-gradient(180deg,rgba(12, 11, 8,0.4),rgba(12, 11, 8,0.7),rgba(12, 11, 8,0.9),rgba(12, 11, 8,1)),url(${tv&&(process.env.REACT_APP_MOVIE_IMAGE+'/w780'+tv.backdrop_path)})`}} 
                className='bgImageGrad w-full h-full text-txtPrimary px-5 sm:px-0'>
                    <div className="py-5 sm:py-7 sm:px-16 md:px-20">
                        <p className="text-sm sm:text-base font-semibold text-txtPrimary opacity-70 sm:opacity-90">Home | Tvs | {tv && tv.original_title||tv.name} </p>
                    </div>
                    <div className="py-[6rem] pb-10 sm:py-28 sm:px-20 sm:pb-10 md:py-40 md:px-36 md:pb-20">
                        <div>
                            <p className="text-brSecondary font-semibold text-sm sm:text-[17px] md:text-lg">WATCH</p>
                            <p className="font-bold text-3xl sm:text-4xl md:text-5xl ">{tv && tv.original_title||tv.name}</p>
                        </div>
                        <div className="flex items-center py-4 flex-wrap">
                            {tv.genres&&tv.genres.map((genre:any,i:number)=>{
                                return <p key={i} className="py-2 px-5 sm:px-6 mx-1 sm:mx-2 my-1 text-[11px] sm:text-sm rounded-full border border-txtPrimary bg-bgPrimary  flex justify-center items-center">{genre.name}</p>
                            })}
                        </div>
                        <div className="flex items-center py-4 flex-wrap text-bgDark">
                            <button onClick={()=>setPlayVideo(true)} className="flex rounded-lg items-center bg-brPrimary p-[14px] sm:p-5 mx-1 sm:mx-2 my-1 text-[12px] sm:text-sm w-[47%] sm:w-[200px] justify-center">
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
                        <img className="w-[190px] h-[280px]" src={tv&&(process.env.REACT_APP_MOVIE_IMAGE+'/w500'+tv.poster_path)} alt='movie poster'/>
                    </div>
                    <div className="flex-1 px-5 sm:px-12 md:px-14">
                        <div>
                            <p className="font-semibold text-xl sm:text-2xl md:text-3xl">{tv&&tv.original_title||tv.name}</p>
                        </div>
                        <div>
                            <p className="py-5 text-[15px] sm:text-base">{tv&&tv.overview}</p>
                        </div>
                        <div className="flex mb-2 sm:mb-3 flex-wrap">
                            <div className="flex mx-2 my-1 items-center"><FaRocket className="text-[12px]"/> <p className="px-2 text-[11px] flex">{tv&&tv.release_date||tv.first_air_date}</p></div>
                            <div className="flex mx-2 my-1 items-center"><FaRegArrowAltCircleUp className="text-[12px]"/> <p className="px-2 text-[11px] flex">{tv&&tv.vote_count}</p></div>
                            <div className="flex mx-2 my-1 items-center"><FaStar className="text-[12px]"/> <p className="px-2 text-[11px] flex">{tv.vote_average&&tv.vote_average.toFixed(2)}</p></div>
                            <div className="flex mx-2 my-1 items-center"><FaFilm className="text-[12px]"/> <p className="px-2 text-[11px] flex">{tv&&tv.number_of_seasons}</p></div>
                            <div className="flex mx-2 my-1 items-center"><FaPlayCircle className="text-[12px]"/> <p className="px-2 text-[11px] flex">{tv&&tv.number_of_episodes}</p></div>
                        </div>
                        <div className="text-sm sm:text-base">
                            <p className='py-3 border-b border-b-brSecondary text-brSecondary'><span className="text-base text-txtPrimary sm:text-lg font-semibold">Director:</span> {crew&&crew.filter((person:any)=>person.job==='Director')
                                .map((person:any)=>{return person.original_name+', '})}</p>
                            <p className='py-3 border-b border-b-brSecondary text-brSecondary'><span className="text-base text-txtPrimary sm:text-lg font-semibold">Producers:</span> {crew&&crew.filter((person:any)=>person.job==='Producer')
                                .map((person:any)=>{return person.original_name+', '})}</p>
                            <p className='py-3 border-b border-b-brSecondary text-brSecondary'><span className="text-base text-txtPrimary sm:text-lg font-semibold">Executive Producers: </span>{crew&&crew.filter((person:any)=>person.job==='Executive Producer')
                                .map((person:any)=>{return person.original_name+', '})}</p>
                            <p className='py-3 border-b border-b-brSecondary text-brSecondary'><span className="text-base text-txtPrimary sm:text-lg font-semibold">Writers:</span> {crew&&crew.filter((person:any)=>person.job==='Writer')
                                .map((person:any)=>{return person.original_name+', '})}</p>
                        </div>

                        <div className="flex justify-start items-center py-4 flex-wrap text-bgDark">
                            {/* <button onClick={()=>setCheckVideos(!checkVideos)} className="flex rounded-lg items-center bg-brPrimary p-[12px] sm:p-3 mx-1 sm:mx-2 my-1 text-[12px] sm:text-sm w-[43%] sm:w-[180px] justify-center">
                                <FaVideo className="text-[12px] sm:text-[15px] mr-1 sm:mr-2"/>Vidoes</button> */}
                            <button onClick={()=>setCheckCrew(!checkCrew)} className="flex rounded-lg items-center bg-brPrimary p-[12px] sm:p-3 mx-1 sm:mx-2 my-1 text-[12px] sm:text-sm w-[43%] sm:w-[180px] justify-center">
                                <FaPeopleArrows className="text-[12px] sm:text-[15px] mr-1 sm:mr-2"/>All Crew</button>
                    </div>
                    </div>

                </div>


                <div className="px-3 sm:px-2 md:px-0">
                    {/* {checkPhotos&&<div id="photos"><RectangleSlider heading='Photos' slides={photos}/></div>} */}
                    {seasons&&<div id="Seasons"><Carousel tv={true} heading='Seasons' slides={seasons}/></div>}
                    {checkCrew&&<div id="crew"><SquareSlider heading='Crew' slides={crew} character={true}/></div>}
                    <CircleSlider heading='Casts' slides={casts} character={true} gender={2}/>
                    <CircleSlider heading='Casts' slides={casts} character={true} gender={1}/>
                    <Carousel tv={true} heading='Similar Tvs' slides={similarTvs}/>
                    <Carousel tv={true} heading='Recommended Tvs' slides={recommendedTvs}/>                    
                </div>
            </div>
        </div>

        </>
    )
}