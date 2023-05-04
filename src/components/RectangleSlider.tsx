import { Link } from "react-router-dom"
import {MdChevronRight, MdChevronLeft} from 'react-icons/md'
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useState } from "react";
import RectangleSliderLoader from "./loaders/rectangleSlides";

export default function RectangleSlider({slides,heading,tv}:any){
    const id=''+Math.random();
	const [favourite,setFavourite]=useState(false);

    const nextslide=()=>{
        let element:any=document.getElementById(`${id}`);
        element.scrollLeft=element.scrollLeft+400;
    }
    
    const prevslide=()=>{
        let element:any=document.getElementById(`${id}`);
        element.scrollLeft=element.scrollLeft-400;
    }

	return(
		<>
			<div className="md:mr-[30px] mt-10">
					<div className="border-l-8 pl-3 border-brTertiary">
						<p className="font-semibold md:font-bold text-2xl md:text-3xl pl-0 md:pl-3 text-txtPrimary">
							{heading}
						</p>
					</div>
					<div className="flex justify-between items-center">
						<MdChevronLeft size={60} onClick={()=>prevslide()} className='hidden sm:block mr-[-40px] scrollBtn'/>
						<div id={`${id}`} className="flex overflow-auto scrollbar-hide scroll-smooth w-[100%] ">
							{slides.length===0? <RectangleSliderLoader/> :slides.map((slide:any,i:number):any=>{
								return <div key={i} className='w-[250px] min-w-[250px]  md:w-[300px] md:min-w-[300px] m-3'>
											<Link to={`/${tv ? 'tvshow' : 'movie'}/${slide.id}`} className="bg-loaderShade w-[100%]">
												<img loading="lazy" src={`${process.env.REACT_APP_MOVIE_IMAGE}/w500${slide.backdrop_path}`} className="object-cover h-[130px] md:h-[150px] w-[100%]" alt='movie'/>
											</Link>
											<div className="text-txtPrimary pt-2">
												<p className="text-txtSecondary text-[11px]">{slide.vote_count}.{slide.adult?'PG':'All'}.{slide.release_date||slide.first_air_date}</p>
											</div>
											<div className="flex justify-between items-center text-txtPrimary">
												<p className="font-semibold md:font-bold line-clamp-2">{slide.original_name||slide.original_title||slide.name}</p>
												{favourite?<FaHeart className="text-pink-500"onClick={()=>setFavourite(!favourite)}/>:<FaRegHeart onClick={()=>setFavourite(!favourite)}/>}
											</div>
									</div>
							})}
						</div>
						<MdChevronRight size={60} onClick={()=>nextslide()} className='hidden sm:block ml-[-40px] p-[-20px] scrollBtn'/>
					</div>
			</div>
		</>
	)
}