import { Fragment, useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {MdChevronRight, MdChevronLeft} from 'react-icons/md'
import Sidelist from "./Sidelist";
import { UseAppDispatch, useAppSelector } from "../Redux/store";
import MainSliderLoader from "./loaders/MainSlider";

export default function MainSlider({slides}:any){
    const [currentslide,setCurrentslide]=useState(0);
    
    const nextslide=useCallback(()=>{
        setCurrentslide(currentslide===slides.length-1 ? 0 : currentslide+1)
      },[currentslide,slides.length])
    
    
    const prevslide=useCallback(()=>{
        setCurrentslide(currentslide===0 ? slides.length-1 : currentslide-1);
    },[currentslide,slides.length])
    

    useEffect(()=>{
        const resetVal=setTimeout(() => {
            nextslide();
        }, 4000);
       return ()=> clearTimeout(resetVal) ;
    },[currentslide,nextslide]);


    
    return (
        <>
            <div className="flex flex-col md:flex-row justify-between">
                <div className="flex-1 py-3 sm:py-0 md:pr-10">
                {
                    slides.length===0?<MainSliderLoader/>:slides.filter((slide:any,i:number)=>{
                        if(i===currentslide){
                            return slide
                        }else{
                            return null
                        }
                    }).map((slide:any,i:number)=>{
                        return  (i<10) && <Fragment key={i}>
                                    <Link  to='/' className="bg-loaderShade block w-[100%] md:h-[37vw] h-[47vw]">
                                        <img className="object-cover w-[100%] h-[100%]" 
                                        src={`${process.env.REACT_APP_MOVIE_IMAGE}/w780${slide.backdrop_path}`} alt="mainslider"/>
                                    </Link>                
                                    <div className="flex items-center justify-between ">
                                        <MdChevronLeft onClick={()=>prevslide()} className='text-[40px] sm:text-[55px] md:text-[65px] md:ml-[-20px] md:mt-[-37vw] mt-[-43vw] scrollBtn'/>
                                        <MdChevronRight onClick={()=>nextslide()} className='text-[40px] sm:text-[55px] md:text-[65px] md:mr-[-20px] md:mt-[-37vw] mt-[-43vw] scrollBtn'/>
                                    </div>

                                    <div className="flex px-3 sm:px-7 pb-6 sm:pb-9 mt-[-38px] sm:mt-[-60px] items-end text-txtPrimary bg-bgDark">
                                        <div className="bg-loaderShade w-[70px] min-w-[70px] h-[100px] sm:w-[90px] sm:h-[140px] md:w-[100px] md:h-[150px] border-[5px] sm:border-[8px] border-bgDark">
                                            <img className="object-cover w-[100%] h-[100%]" 
                                            src={process.env.REACT_APP_MOVIE_IMAGE+slide.poster_path} alt="mainslider"/>
                                        </div>
                                        <div className="pl-3 sm:px-7">
                                        <p className="font-semibold text-xl sm:text-2xl sm:font-bold line-clamp-1">{slide.original_title}</p>
                                        <p className="text-[12px] sm:pt-2">Released On {slide.release_date}</p>
                                        </div>
                                    </div>
                                </Fragment>

                    })
                }
                </div>
                <div>
                    <Sidelist heading='Top Rated'/>
                </div>

                    
            </div>
        </>
    )
}