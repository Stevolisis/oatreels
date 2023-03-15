import {MdChevronRight, MdChevronLeft} from 'react-icons/md'
import { Link } from 'react-router-dom';

export default function Listings({slides}:any){
    const id=''+Math.random();

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
            <div className="border-l-8 pl-3 border-brTertiary">
                <p className="font-semibold md:font-bold text-2xl md:text-3xl pl-0 md:pl-3 text-txtPrimary">
                    Top Box Office
                </p>   
            </div>             
        <div className="flex justify-between items-center">
        <MdChevronLeft size={60} onClick={()=>prevslide()} className='mr-[-40px] scrollBtn hidden sm:block'/>
        <div id={`${id}`} className="w-[100%] flex justify-start items-center scrollbar-hide overflow-x-scroll py-4 scroll-smooth">
            {slides.map((slide:string,i:number):any=>{
                return  <Link to='/' key={i}  className='flex duration-300  w-[100%] mx-3 min-w-[30%]'>
                <div className='w-[100px] h-[140px]'>
                    <img src={slide} alt='listings' className='object-cover w-full h-full'/>
                </div>
                <div className='flex-1 px-3 text-txtPrimary'>
                    <p className='font-semibold md:font-bold line-clamp-3'>Oscar Preview: Maybe the multiverse Will Give Us the Best Picture Winner We Deserve</p>
                    <p className='text-[11px] pt-2 line-clamp-2 text-txtSecondary'>March 11 / VarietyL Tv News</p>
                </div>
            </Link>
            })}
        </div>
        <MdChevronRight size={60} onClick={()=>nextslide()} className='hidden sm:block ml-[-40px] scrollBtn'/>
        </div>
        </div>     
        </>
    )
}