import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { getSearches, resetSearch, searchMovies } from "../Redux/searches";
import { UseAppDispatch, useAppSelector } from "../Redux/store"
import FiltersLoader from "./loaders/filters";


export default function Filter(){
    const dispatch=UseAppDispatch();
    const filters=useAppSelector(getSearches);
    const [searchKey,setSearchkey]=useState('')

    function searching(){

        if(searchKey.length>2){
            dispatch(resetSearch())
            dispatch(searchMovies({type:'movies',key:searchKey}));
        }
        if(searchKey.length<=2){
            dispatch(resetSearch())
        }
    }

    useEffect(()=>{
        searching();
    },[searchKey])

    return(
        <>
        <div className="flex-1">
                <div className=" mx-2 sm w-[95%] sm:w-[46vw] flex items-center border-b border-brPrimary sm:border-none">
                    <input onChange={(e:any)=>setSearchkey(e.target.value)} type='text' placeholder="Search movies, series, novellas ..."
                    className="outline-none text-brTertiary sm:text-bgPrimary text-sm md:text-base
                     placeholder-txtSecondary px-5 py-2 sm:py-4 w-full 
                    bg-transparent sm:bg-brTertiary rounded-none sm:rounded-full"/>
                    <i className="fa fa-search  ml-[-30px] text-brSecondary sm:text-bgSecondary"/>
                </div>
                <div className="z-20 absolute mx-2 w-[95%] sm:w-[46vw] mt-2 rounded-xl bg-brSecondary px-2">
                    {(filters.length===0&&searchKey.length>2)?<FiltersLoader/>:filters.map((filter:any,i:number):any=>{
                        return <Link to='/' key={i} className='flex py-2 border-b'>
                                    <div className="bg-loaderShade w-[50px] h-[60px] sm:w-[60px] sm:h-[80px]">
                                        <img src={process.env.REACT_APP_MOVIE_IMAGE+filter.poster_path} alt='filterImg' className="w-full h-full object-cover"/>
                                    </div>
                                    <div className="pl-3">
                                    <p className="font-bold text-[13px] md:text-[15px] line-clamp-2">{filter.original_name||filter.original_title}</p>
                                    <p className="text-[9px] md:text-[10px]">{filter.release_date&&filter.release_date.split('-')[0]}</p>
                                    <p className="text-[11px] md:text-[12px] line-clamp-2">Frank Welker, Mindy Cohn</p>
                                    </div>
                               </Link>
                    })}
                </div>
        </div>
        </>
    )
}