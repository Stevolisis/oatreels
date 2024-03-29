import { useMemo } from 'react';
import {  FaFilm, FaHeart, FaTv } from "react-icons/fa";
import { Link } from "react-router-dom";
import { getFavourites, getFavTrigger, offTrigger } from "../Redux/favourites";
import { UseAppDispatch, useAppSelector } from "../Redux/store";

export default function Navbar(){
    const favourites=useAppSelector(getFavourites);
    const triggerStatus=useAppSelector(getFavTrigger);
    const dispatch=UseAppDispatch();
    
    useMemo(()=>{
        let resetVal:any;
        if(triggerStatus){
            resetVal=setTimeout(() => {
                dispatch(offTrigger());
            }, 2000);
        }
     return ()=> clearTimeout(resetVal) ;
    },[triggerStatus, dispatch])



    return(
        <nav className="flex items-center flex-row mt-0 sm:mt-2 md:flex-col h-auto w-full md:w-auto
         bg-brPrimary md:h-[90%] py-3 px-4 sm:p-5 mx-5 rounded-none sm:rounded-full">
            <div className="flex justify-center items-center md:pt-5 pt-0">
                <img src='/logo.png' alt='logo' className='w-7 h-7'/>
            </div>
            <div className="flex md:flex-col flex-row items-center justify-center flex-1">
                <Link to='/'  className="my-0 md:my-3 mx-3"><FaFilm size={17}/></Link>
                <Link to='/tvshows'  className="my-0 md:my-3 mx-3"><FaTv size={17}/></Link>
                {/* <Link to='/'  className="my-0 md:my-3 mx-3"><FaBookmark size={17}/></Link> */}
                <Link to='/favourites'  className="my-0 md:my-3 mx-3 flex">
                    <FaHeart size={17}/>
                    <sup className={`ml-[-5px] text-[8px] sm:text-[10px] ${triggerStatus ? 'bg-pink-500 border border-[txtSecondary]' : favourites.length>0 ? 'bg-bgDark border border-[txtSecondary]' : ''} text-txtPrimary rounded-full sm:w-3.5 sm:h-3.5 w-3 h-3 flex justify-center items-center `}>{favourites.length===0 ? '' : favourites.length}</sup>
                </Link>
            </div>

            <div>
                <a href='https://www.linkedin.com/in/steven-joseph-6871a2237/'>
                    <img src="/profilePic.png" alt='navbar' className="w-10 h-10 rounded-full object-cover"/>
                </a>
            </div>

        </nav>
    )
}