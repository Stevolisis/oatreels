import { FaDropbox, FaPlay } from "react-icons/fa";
import YouTube from "react-youtube";
import { getVideos } from "../Redux/movie"
import { useAppSelector } from "../Redux/store"

export default function VideoPlayer({id,setPlayVideo,setVideoId}:any){
    const videos=useAppSelector(getVideos);

    return(
        <div className="top-0 fixed w-full h-full z-30 bg-mainBg">
            <div className="w-full h-full overflow-y-auto">
                <div className="cursor-pointer text-txtPrimary flex items-center p-3 bg-bgPrimary text-sm fixed" onClick={()=>setPlayVideo(false)}>
                    <FaDropbox/><p className="pl-2">Close</p>
                </div>
                <div>
                    <YouTube
                        videoId={id}
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
                                    <div onClick={()=>setVideoId(video.key)} className="cursor-pointer bg-bgPrimary my-3 p-4 flex items-center">
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