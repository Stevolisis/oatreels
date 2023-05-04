import { Link } from "react-router-dom"
import { FaHeart, FaPlayCircle, FaRegHeart } from "react-icons/fa";
import { useState } from "react";
import CarouselLoader from "./loaders/carousel";
import { UseAppDispatch, useAppSelector } from "../Redux/store";
import { addFavourite, deleteFavourite } from "../Redux/favourites";
import { getGenres } from "../Redux/movies";



export default function FavouritesListing({slides,heading}:any){
    const id=''+Math.random();
	const [favourite,setFavourite]=useState(0);
    const genres=useAppSelector(getGenres);
    const dispatch=UseAppDispatch();
    


    return(
        <>
			<div className="md:mr-[30px] pt-8">
                <div className="border-l-8 pl-3 border-brTertiary">
                    <p className="font-semibold md:font-bold text-2xl md:text-3xl pl-0 md:pl-3 text-txtPrimary">
                        {heading}
                    </p>   
                </div>             
            <div className="flex justify-start items-start flex-wrap py-4">
				{slides.map((slide:any,i:number):any=>{
					return  <div key={i}  className='duration-300 hover:scale-105 mx-2 my-3 sm:my-5 w-[130px] min-w-[130px] sm:w-[150px] sm:min-w-[150px] md:w-[180px] md:min-w-[180px]'>
                                <Link to={`/${slide.tv ? 'tvshow' : 'movie'}/${slide.id}`} className='w-[100%] h-[280px] sm:h-[343px] block bg-loaderShade'>
                                        <img loading="lazy" src={`${process.env.REACT_APP_MOVIE_IMAGE}/w500${slide.poster_path}`} className='object-cover w-[100%] h-[100%]' alt='movie'/>
                                </Link>
                                <div className="py-3">
                                    <div><p className="line-clamp-2 font-semibold md:font-bold text-txtPrimary text-base sm:text-lg ">{slide.original_name||slide.title||slide.name}</p></div>
                                    <div>
                                        <p className="text-[12px] sm:text-sm text-txtSecondary ">
                                        {slide&&genres.filter((genre:any)=>genre.id===slide.genre_ids[0])
                                        .map((genree:any)=> genree.name)}
                                        </p>
                                    </div>
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
                                        <div className="cursor-pointer"> <FaHeart className="text-pink-500" onClick={()=>dispatch(deleteFavourite(slide.id))}/> </div>
                                        
                                    </div>
                                </div>
                            </div>
				})}
			</div>
			</div>        
        </>
    )
}