import { FaHeart, FaPlay, FaShare } from "react-icons/fa";
import { useParams } from "react-router-dom"

export default function Movie(){
    const {id}=useParams();

    return(
        <>
        <div className="text-primary">                
            <div className='md:ml-[120px] ml-0 sm:px-5'>
                <div className="bgImageGrad px-36 text-txtPrimary">
                    <div className="py-7">
                        <p>Home/TV Shows/Daisy Jones & The Six</p>
                    </div>
                    <div className="py-40">
                        <div>
                            <p>WATCH</p>
                            <p>Daisy Jones & The Six</p>
                        </div>
                        <div>
                            <p>Drama</p>
                            <p>Comedy</p>
                            <p>Romance</p>
                        </div>
                        <div>
                            <button><FaPlay/>Watch Now</button>
                            <button><FaHeart/>Add to Favourites</button>
                            <button><FaShare/></button>
                        </div>
                    </div>                    
                </div>

            </div>
        </div>

        </>
    )
}