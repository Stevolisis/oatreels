import { Link } from "react-router-dom"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useCallback, useState } from "react";
import {MdChevronRight, MdChevronLeft} from 'react-icons/md'
// import { Carousel } from 'react-responsive-carousel';

export default function Carousel({slides}:any){
    const [trans,setTrans]=useState<number>(0);
    const [id,setId]=useState<string>(()=>{return ''+Math.random()})

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
			<div className="mr-[30px] py-8">
                <p className="font-bold text-4xl py-4 text-txtPrimary ml-3">
                    Recent Release
                </p>                
            <div className="flex justify-between items-center">
            <MdChevronLeft size={60} onClick={()=>prevslide()} className='cursor-pointer mr-[-40px] z-10 bg-black border border-txtPrimary rounded-md text-txtPrimary'/>
			<div id={`${id}`} className="w-[100%] flex justify-start items-center overflow-x-scroll py-4 scroll-smooth">
				{slides.map((slide:string,i:number):any=>{
					return  <div key={i}  className='duration-300 hover:scale-105  w-[16%] mx-3 min-w-[16%]' style={{translate:`${trans}%`}}>
                                <Link to='/#' className='w-[100%] h-[25vw] block'>
                                        <img src={slide} className='object-cover w-[100%] h-[100%]' alt='movie'/>
                                </Link>
                                <div className="py-3">
                                    <div><p className="font-bold text-txtPrimary text-lg ">The Shawshank Redemption</p></div>
                                    <div><p className="text-sm text-txtSecondary ">Action/Rivelry</p></div>
                                    <div>
                                        <i className="fa fa-star text-[gold]"/>
                                        <span className="text-txtPrimary text-[12px] pl-2">7.4</span>
                                    </div>
                                </div>
                            </div>
				})}
			</div>
            <MdChevronRight size={60} onClick={()=>nextslide()} className='cursor-pointer ml-[-40px] p-[-20px] z-10 bg-black border border-txtPrimary rounded-md text-txtPrimary'/>
            </div>
			</div>        
        </>
    )
}