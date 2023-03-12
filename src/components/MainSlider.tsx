import { Fragment, useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
            <div className="mr-[340px] block">
                {
                    slides.filter((slide:string,i:number)=>{
                        if(i===currentslide){
                            return slide
                        }else{
                            return null
                        }
                    }).map((slide:string,i:number)=>{
                        return  <Fragment key={i}>
                                    <Link  to='/' className="block w-[100%] h-[505px]">
                                        <img className="w-[100%] h-[100%]" src={slide} alt="mainslider"/>
                                    </Link>                
                                    <div className="flex items-center justify-between ">
                                        <div className="mt-[-507px]"><i className="fa fa-arrow-left p-4 bg-black border border-txtPrimary rounded-md text-txtPrimary" onClick={()=>prevslide()}/></div>
                                        <div className="mt-[-507px]"><i className="fa fa-arrow-right p-4 bg-black border border-txtPrimary rounded-md text-txtPrimary" onClick={()=>nextslide()}/></div>
                                    </div>
                                </Fragment>

                    })
                }
            </div>
        </>
    )
}