import { Link } from "react-router-dom"
import {MdChevronRight, MdChevronLeft} from 'react-icons/md'
import { FaHeart, FaPlayCircle, FaRegHeart } from "react-icons/fa";
import { useState } from "react";
import CarouselLoader from "./loaders/carousel";
import { UseAppDispatch } from "../Redux/store";
import { addfavourite } from "../Redux/favourites";



export default function Carousel({slides,heading,tv}:any){
    const id=''+Math.random();
	const [favourite,setFavourite]=useState(0);
    const dispatch=UseAppDispatch();

    const nextslide=()=>{
        let element:any=document.getElementById(`${id}`);
        element.scrollLeft=element.scrollLeft+400;
    }
    
    const prevslide=()=>{
        let element:any=document.getElementById(`${id}`);
        element.scrollLeft=element.scrollLeft-400;
    }

    function insertFavourite(slide:any){
        setFavourite(slide.id);
        dispatch(addfavourite(slide));
    }
    


    return(
        <>
			<div className="md:mr-[30px] pt-8">
                <div className="border-l-8 pl-3 border-brTertiary">
                    <p className="font-semibold md:font-bold text-2xl md:text-3xl pl-0 md:pl-3 text-txtPrimary">
                        {heading}
                    </p>   
                </div>             
            <div className="flex justify-between items-center">
            <MdChevronLeft size={60} onClick={()=>prevslide()} className='hidden sm:block mr-[-40px] scrollBtn'/>
			<div id={`${id}`} className="w-[100%] flex justify-start items-start scrollbar-hide overflow-x-scroll py-4 scroll-smooth">
				{slides.length===0?<CarouselLoader/>:slides.map((slide:any,i:number):any=>{
					return  <div key={i}  className='duration-300 hover:scale-105 mx-3 w-[130px] min-w-[130px] sm:w-[150px] sm:min-w-[150px] md:w-[180px] md:min-w-[180px]'>
                                <Link to={`/${tv ? 'tvshow' : 'movie'}/${slide.id}`} className='w-[100%] h-[280px] sm:h-[343px] block bg-loaderShade'>
                                        <img src={`${process.env.REACT_APP_MOVIE_IMAGE}/w500${slide.poster_path}`} className='object-cover w-[100%] h-[100%]' alt='movie'/>
                                </Link>
                                <div className="py-3">
                                    <div><p className="line-clamp-2 font-semibold md:font-bold text-txtPrimary text-base sm:text-lg ">{slide.original_name||slide.title||slide.name}</p></div>
                                    <div><p className="text-[12px] sm:text-sm text-txtSecondary ">Action/Rivelry</p></div>
                                    <div className="flex justify-between items-center text-txtPrimary">
                                        <div>
                                        { 
                                            slide.episode_count ? 
                                            <><FaPlayCircle className="fa fa-star text-[#FF0000] bg-txtPrimary rounded-full"/>
                                            <span className="text-[11px] sm:text-[12px] pl-2">{(slide.vote_average&&slide.vote_average.toFixed(2))||slide.episode_count}</span>
                                            </>
                                            :
                                            <><i className="fa fa-star text-[gold]"/>
                                            <span className="text-[11px] sm:text-[12px] pl-2">{slide.vote_average&&slide.vote_average.toFixed(2)}</span>
                                            </>
                                        }
                                        </div>
                                        <div> {favourite===slide.id ?<FaHeart className="text-pink-500" onClick={()=>setFavourite(slide.id)}/>:<FaRegHeart onClick={()=>insertFavourite(slide)}/>} </div>
                                        
                                    </div>
                                </div>
                            </div>
				})}
			</div>
            <MdChevronRight size={60} onClick={()=>nextslide()} className='hidden sm:block ml-[-40px] scrollBtn'/>
            </div>
			</div>        
        </>
    )
}