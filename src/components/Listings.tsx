import {MdChevronRight, MdChevronLeft} from 'react-icons/md'
import { Link } from 'react-router-dom';
import { fetchMovies } from '../Redux/movies';
import { UseAppDispatch } from '../Redux/store';
import ListingsLoader from './loaders/listings';

export default function Listings({slides,heading}:any){
    const id=''+Math.random();
    const dispatch=UseAppDispatch();

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
        <div className="mr-0 md:mr-[30px] pt-8 pb-0  sm:py-8">
            <div className="border-l-8 pl-3 border-brTertiary">
                <p onClick={()=>dispatch(fetchMovies())} className="font-semibold md:font-bold text-2xl md:text-3xl pl-0 md:pl-3 text-txtPrimary">
                    {heading}
                </p>   
            </div>             
        <div className="flex justify-between items-center">
        <MdChevronLeft size={60} onClick={()=>prevslide()} className='mr-[-40px] scrollBtn hidden sm:block'/>
        <div id={`${id}`} className="w-[100%] flex justify-start items-center scrollbar-hide overflow-x-scroll py-4 scroll-smooth">
            {slides.map((slide:string,i:number):any=>{
                return <ListingsLoader/>
            })}
        </div>
        <MdChevronRight size={60} onClick={()=>nextslide()} className='hidden sm:block ml-[-40px] scrollBtn'/>
        </div>
        </div>     
        </>
    )
}