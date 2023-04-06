import { Fragment } from "react";
import { Link } from "react-router-dom";
import {MdChevronRight, MdChevronLeft} from 'react-icons/md'


export default function MainSliderLoader(){
    const slides:number[]=[1]

    
    return (
        <>
                {
                    slides.map((slide:number,i:number)=>{
                        return  <Fragment key={i}>
                                    <Link  to='/' className="skeleton-load block w-[100%] md:h-[37vw] h-[47vw]">
                                    </Link>                
                                    <div className="flex items-center justify-between ">
                                        <MdChevronLeft className='text-[40px] sm:text-[55px] md:text-[65px] md:ml-[-20px] md:mt-[-37vw] mt-[-43vw] scrollBtn'/>
                                        <MdChevronRight  className='text-[40px] sm:text-[55px] md:text-[65px] md:mr-[-20px] md:mt-[-37vw] mt-[-43vw] scrollBtn'/>
                                    </div>

                                    <div className="flex px-3 sm:px-7 pb-6 sm:pb-9 mt-[-38px] sm:mt-[-60px] items-end text-txtPrimary bg-bgDark">
                                        <div className="skeleton-load w-[70px] min-w-[70px] h-[100px] sm:w-[90px] sm:h-[140px] md:w-[100px] md:h-[150px] border-[5px] sm:border-[8px] border-bgDark">
                                            
                                        </div>
                                        <div className="pl-3 sm:px-7 w-full">
                                        <p className="w-full h-2 rounded-full skeleton-load my-3"></p>
                                        <p className="w-[70%] h-2 rounded-full skeleton-load"></p>
                                        </div>
                                    </div>
                                </Fragment>

                    })
                }
        </>
    )
}