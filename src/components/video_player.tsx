import { FaCross, FaPlay } from "react-icons/fa";
import YouTube from "react-youtube";
import { getVideos } from "../Redux/movie"
import { useAppSelector } from "../Redux/store"

export default function VideoPlayer({id,setPlayVideo}:any){
    const videos=useAppSelector(getVideos);

    return(
        <div className="fixed w-full h-full z-30 bg-mainBg overflow-y-auto">
            <div onClick={()=>setPlayVideo(false)}><FaCross/>Close</div>
            <div>
                <YouTube
                    videoId={id}
                />
            </div>
            <div className="py-5 px-3 text-txtPrimary">
                {
                    videos&&videos.map((video:any,i:number)=>{
                        return(
                                <div className="bg-bgPrimary my-3 p-4 flex items-center">
                                    <FaPlay className="text-[12px]"/>
                                    <p className='pl-3'>{video.name}</p>
                                </div>
                              )
                    })
                }
            </div>
        </div>
    )
}