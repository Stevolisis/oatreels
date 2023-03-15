import { Fragment, useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {MdChevronRight, MdChevronLeft} from 'react-icons/md'
import Sidelist from "./Sidelist";

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
                    slides.filter((slide:string,i:number)=>{
                        if(i===currentslide){
                            return slide
                        }else{
                            return null
                        }
                    }).map((slide:string,i:number)=>{
                        return  <Fragment key={i}>
                                    <Link  to='/' className="block w-[100%] md:h-[37vw] h-[47vw]">
                                        <img className="object-cover w-[100%] h-[100%]" src={slide} alt="mainslider"/>
                                    </Link>                
                                    <div className="flex items-center justify-between ">
                                        <MdChevronLeft size={60} onClick={()=>prevslide()} className='hidden sm:block ml-[-20px] md:mt-[-37vw] mt-[-43vw] scrollBtn'/>
                                        <MdChevronRight size={60} onClick={()=>nextslide()} className='hidden sm:block mr-[-20px] md:mt-[-37vw] mt-[-43vw] scrollBtn'/>
                                    </div>
                                </Fragment>

                    })
                }
                </div>
                <div>
                    <Sidelist/>
                </div>

                    
            </div>
        </>
    )
}