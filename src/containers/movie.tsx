import { useEffect, useState } from "react";
import { FaHeart, FaPlay, FaShare } from "react-icons/fa";
import { useParams } from "react-router-dom"
import { fetchMovie, getMovie, resetMovie } from "../Redux/movie";
import { getGenres } from "../Redux/movies";
import { UseAppDispatch, useAppSelector } from "../Redux/store";

export default function Movie(){
    const {id}:any=useParams();
    const dispatch=UseAppDispatch();
    const movie:any=useAppSelector(getMovie);
    const genres=useAppSelector(getGenres);
    const [image_path,setImage_path]=useState('')

    useEffect(()=>{
        if(id){
            dispatch(resetMovie());
            dispatch(fetchMovie(id));
            setImage_path(movie&&process.env.REACT_APP_MOVIE_IMAGE+'/w500'+movie.backdrop_path);
        }
    },[id]);
console.log(image_path)
    // function getGenre(id:number){
    //     return genres.filter((genre:any)=>genre.id===id);
        
    // }

    return(
        <>
        <div className="text-primary">                
            <div className='md:ml-[120px] ml-0 sm:px-5'>
                <div style={{ backgroundImage: `linear-gradient(180deg,rgba(12, 11, 8,0.4),rgba(12, 11, 8,0.7),rgba(12, 11, 8,0.9),rgba(12, 11, 8,1)),url(${movie&&(process.env.REACT_APP_MOVIE_IMAGE+'/w780'+movie.backdrop_path)})`}} 
                className='bgImageGrad w-full h-full text-txtPrimary px-5 sm:px-0'>
                    <div className="py-5 sm:py-7 sm:px-16 md:px-20">
                        <p className="text-sm sm:text-base font-semibold text-txtPrimary opacity-70 sm:opacity-90">Home | movies | {movie && movie.original_title} </p>
                    </div>
                    <div className="py-[6rem] pb-10 sm:py-28 sm:px-20 sm:pb-10 md:py-40 md:px-36 md:pb-20">
                        <div>
                            <p className="text-brSecondary font-semibold text-sm sm:text-[17px] md:text-lg">WATCH</p>
                            <p className="font-bold text-3xl sm:text-4xl md:text-5xl ">{movie && movie.original_title}</p>
                        </div>
                        <div className="flex items-center py-4 flex-wrap">
                            {movie.genres&&movie.genres.map((genre:any,i:number)=>{
                                return <p key={i} className="py-2 px-5 sm:px-6 mx-1 sm:mx-2 my-1 text-[11px] sm:text-sm rounded-full border border-txtPrimary bg-bgPrimary  flex justify-center items-center">{genre.name}</p>
                            })}
                        </div>
                        <div className="flex items-center py-4 flex-wrap text-bgDark">
                            <button className="flex rounded-lg items-center bg-brPrimary p-[14px] sm:p-5 mx-1 sm:mx-2 my-1 text-sm w-[47%] sm:w-[200px] justify-center"><FaPlay size={15} className="mr-2"/>Watch Now</button>
                            <button className="flex rounded-lg items-center bg-brPrimary p-[14px] sm:p-5 mx-1 sm:mx-2 my-1 text-sm w-[47%] sm:w-[200px] justify-center"><FaHeart size={15} className="mr-1 sm:mr-2"/>Add to Favourites</button>
                            <button className="flex rounded-lg items-center bg-brPrimary p-4 sm:p-5 mx-1 sm:mx-2 my-1 text-sm"><FaShare size={15}/></button>
                        </div>
                    </div>                    
                </div>

                <div className="py-5 text-txtPrimary flex justify-between flex-row-reverse">
                    <div className="flex-1 px-14">
                        <div>
                            <p className="font-semibold text-3xl">{movie&&movie.original_title}</p>
                        </div>
                        <div>
                            <p className="py-5">{movie&&movie.overview}</p>
                        </div>
                        <div>
                            <p>{movie&&movie.original_title}</p>
                            <p>{movie&&movie.original_title}</p>
                            <p>{movie&&movie.original_title}</p>
                            <p>{movie&&movie.original_title}</p>
                        </div>
                    </div>
                    <div className="flex-2 hidden sm:block">
                        <img className="w-[190px] h-[280px]" src={movie&&(process.env.REACT_APP_MOVIE_IMAGE+'/w500'+movie.poster_path)} alt='movie poster'/>
                    </div>
                </div>

            </div>
        </div>

        </>
    )
}