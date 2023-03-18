import { FaHeart, FaPlay, FaShare } from "react-icons/fa";
import { useParams } from "react-router-dom"

export default function Movie(){
    const {id}=useParams();

    return(
        <>
        <div className="text-primary">                
            <div className='md:ml-[120px] ml-0 sm:px-5'>
                <div className="bgImageGrad text-txtPrimary">
                    <div className="py-7 px-20">
                        <p className="font-semibold text-txtPrimary opacity-90">Home | TV Shows | Daisy Jones & The Six</p>
                    </div>
                    <div className="py-40 px-36 pb-20">
                        <div>
                            <p className="text-brSecondary font-semibold text-lg">WATCH</p>
                            <p className="font-bold text-5xl py-4">Daisy Jones & The Six</p>
                        </div>
                        <div className="flex items-center py-4">
                            <p className="p-2 mx-2 text-sm rounded-full border border-txtPrimary bg-bgPrimary w-[100px] flex justify-center items-center">Drama</p>
                            <p className="p-2 mx-2 text-sm rounded-full border border-txtPrimary bg-bgPrimary w-[100px] flex justify-center items-center">Comedy</p>
                            <p className="p-2 mx-2 text-sm rounded-full border border-txtPrimary bg-bgPrimary w-[100px] flex justify-center items-center">Romance</p>
                        </div>
                        <div className="flex items-center py-4">
                            <button className="flex rounded-lg items-center bg-brPrimary p-5 mx-2 text-sm w-[200px] justify-center"><FaPlay/>Watch Now</button>
                            <button className="flex rounded-lg items-center bg-brPrimary p-5 mx-2 text-sm w-[200px] justify-center"><FaHeart/>Add to Favourites</button>
                            <button className="flex rounded-lg items-center bg-brPrimary p-5 mx-2 text-sm"><FaShare/></button>
                        </div>
                    </div>                    
                </div>

            </div>
        </div>

        </>
    )
}