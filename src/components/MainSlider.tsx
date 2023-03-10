import { Fragment, useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {MdChevronRight, MdChevronLeft} from 'react-icons/md'

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
            <div className="md:mr-[340px] mr-[30px] block px-5">
                {
                    slides.filter((slide:string,i:number)=>{
                        if(i===currentslide){
                            return slide
                        }else{
                            return null
                        }
                    }).map((slide:string,i:number)=>{
                        return  <Fragment key={i}>
                                    <Link  to='/' className="block w-[100%] md:h-[37vw] h-[43vw]">
                                        <img className="w-[100%] h-[100%]" src={slide} alt="mainslider"/>
                                    </Link>                
                                    <div className="flex items-center justify-between ">
                                        <MdChevronLeft size={60} onClick={()=>prevslide()} className='ml-[-20px] md:mt-[-37vw] mt-[-43vw] scrollBtn'/>
                                        <MdChevronRight size={60} onClick={()=>nextslide()} className='mr-[-20px] md:mt-[-37vw] mt-[-43vw] scrollBtn'/>
                                    </div>
                                </Fragment>

                    })
                }
            </div>
        </>
    )
}