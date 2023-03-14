import { Link } from "react-router-dom"
import {MdChevronRight, MdChevronLeft} from 'react-icons/md'
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useState } from "react";



export default function Carousel({slides}:any){
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
			<div className="md:mr-[30px] py-8">
                <div className="border-l-8 pl-3 border-brTertiary">
                    <p className="font-semibold md:font-bold text-2xl md:text-3xl pl-0 md:pl-3 text-txtPrimary">
                        Recent Release
                    </p>   
                </div>             
            <div className="flex justify-between items-center">
            <MdChevronLeft size={60} onClick={()=>prevslide()} className='hidden sm:block mr-[-40px] scrollBtn'/>
			<div id={`${id}`} className="w-[100%] flex justify-start items-center scrollbar-hide overflow-x-scroll py-4 scroll-smooth">
				{slides.map((slide:string,i:number):any=>{
					return  <div key={i}  className='duration-300 hover:scale-105 mx-3 w-[120px] min-w-[120px] sm:w-[150px] sm:min-w-[150px] md:w-[180px] md:min-w-[180px]'>
                                <Link to='/#' className='w-[100%] h-[280px] sm:h-[343px] block'>
                                        <img src={slide} className='object-cover w-[100%] h-[100%]' alt='movie'/>
                                </Link>
                                <div className="py-3">
                                    <div><p className=" truncate font-semibold md:font-bold text-txtPrimary text-base sm:text-lg ">The Shawshank Redemption</p></div>
                                    <div><p className="text-[12px] sm:text-sm text-txtSecondary ">Action/Rivelry</p></div>
                                    <div className="flex justify-between items-center text-txtPrimary">
                                        <div>
                                        <i className="fa fa-star text-[gold]"/>
                                        <span className="text-[11px] sm:text-[12px] pl-2">7.4</span>
                                        </div>
                                        <div> {favourite?<FaHeart className="text-pink-500"onClick={()=>setFavourite(!favourite)}/>:<FaRegHeart onClick={()=>setFavourite(!favourite)}/>} </div>
                                        
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