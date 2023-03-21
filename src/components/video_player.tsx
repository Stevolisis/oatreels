import { useEffect, useState } from "react";
import { FaDropbox, FaPlay } from "react-icons/fa";
import YouTube from "react-youtube";
import { getVideos } from "../Redux/movie"
import { useAppSelector } from "../Redux/store"

export default function VideoPlayer({setPlayVideo}:any){
    const videos=useAppSelector(getVideos);
    const [videoId,setVideoId]=useState('');
    const trailer=videos.filter((video:any)=>{return video.type==='Trailer'});
    console.log(trailer);

    useEffect(()=>{
        console.log(trailer[0]);
        if(videos) setVideoId(trailer[0].key)
    },[trailer,videos])

    return(
        <div className="top-0 fixed sm:my-5 sm:h-[95%] z-30 flex flex-col justify-center items-center w-full">
            <div className="h-full overflow-y-auto w-full sm:w-[80vw] md:w-[50vw] bg-mainBg">
                <div className="cursor-pointer text-txtPrimary flex items-center p-3 bg-bgPrimary text-sm fixed" onClick={()=>setPlayVideo(false)}>
                    <FaDropbox/><p className="pl-2">Close</p>
                </div>
                <div>
                    <YouTube
                        videoId={videoId}
                        opts={{
                            width:'100%',
                            height:'300px',
                            boxSizing:'border-box'
                        }}
                    />
                </div>
                <div className="py-5 px-3 text-txtPrimary w-full h-full">
                    {
                        videos&&videos.map((video:any,i:number)=>{
                            return(
                                    <div key={i} onClick={()=>setVideoId(video.key)} className="cursor-pointer bg-bgPrimary my-3 p-4 flex items-center">
                                        <FaPlay className="text-[12px]"/>
                                        <p className='pl-3'>{video.name}</p>
                                    </div>
                                )
                        })
                    }
                </div>
            </div>
        </div>
    )
}