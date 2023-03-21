import { useEffect, useState } from "react";
import { FaDropbox, FaPlay } from "react-icons/fa";
import YouTube from "react-youtube";
import { getVideos } from "../Redux/movie"
import { useAppSelector } from "../Redux/store"

export default function VideoPlayer({setPlayVideo}:any){
    const videos=useAppSelector(getVideos);
    const [videoId,setVideoId]=useState('');
    const trailer=videos.filter((video:any)=>{return video.type==='Trailer'});
    console.log(videoId);

    useEffect(()=>{
        console.log(trailer[0]);
        if(videos) setVideoId(trailer[0].key)
    },[trailer,videos])

    return(
        <div className="bg-[rgba(0,0,0,0.8)] top-0 fixed h-full sm:py-5 z-30 flex flex-col justify-center items-center w-full">
            <div className="h-full overflow-y-auto w-full sm:w-[80vw] md:w-[50vw] bg-mainBg">
                <div className="z-40 cursor-pointer text-txtPrimary flex items-center p-3 bg-bgPrimary text-sm fixed" onClick={()=>setPlayVideo(false)}>
                    <FaDropbox/><p className="pl-2">Close</p>
                </div>
                <div className="w-full h-300px skeleton-load">
                    <YouTube
                        videoId={videoId}
                        opts={{
                            width:'100%',
                            height:'300px',
                            boxSizing:'border-box',
                            playerVars: {
                                autoplay: 1,
                              },
                        }}
                    />
                </div>
                <div className="py-5 text-txtPrimary w-full h-full">
                    {
                        videos&&videos.map((video:any,i:number)=>{
                            return(
                                    <div key={i} onClick={()=>setVideoId(video.key)} className="my-1 cursor-pointer bg-bgPrimary p-4 flex items-center">
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