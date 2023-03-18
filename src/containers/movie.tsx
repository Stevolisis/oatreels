import { FaHeart, FaPlay, FaShare } from "react-icons/fa";
import { useParams } from "react-router-dom"

export default function Movie(){
    const {id}=useParams();

    return(
        <>
        <div className="text-primary">                
            <div className='md:ml-[120px] ml-0 sm:px-5'>
                <div className="bgImageGrad text-txtPrimary px-5 sm:px-0">
                    <div className="py-5 sm:py-7 sm:px-16 md:px-20">
                        <p className="text-sm sm:text-base font-semibold text-txtPrimary opacity-70 sm:opacity-90">Home | TV Shows | Daisy Jones & The Six </p>
                    </div>
                    <div className="py-[6rem] pb-10 sm:py-28 sm:px-20 sm:pb-10 md:py-40 md:px-36 md:pb-20">
                        <div>
                            <p className="text-brSecondary font-semibold text-sm sm:text-[17px] md:text-lg">WATCH</p>
                            <p className="font-bold text-3xl sm:text-4xl md:text-5xl ">Daisy Jones & The Six</p>
                        </div>
                        <div className="flex items-center py-4 flex-wrap">
                            <p className="p-1 sm:p-2 mx-1 sm:mx-2 my-1 text-sm rounded-full border border-txtPrimary bg-bgPrimary min-w-[80px] sm:min-w-[100px] w-[80px] sm:w-[100px] flex justify-center items-center">Drama</p>
                            <p className="p-1 sm:p-2 mx-1 sm:mx-2 my-1 text-sm rounded-full border border-txtPrimary bg-bgPrimary min-w-[80px] sm:min-w-[100px] w-[80px] sm:w-[100px] flex justify-center items-center">Comedy</p>
                            <p className="p-1 sm:p-2 mx-1 sm:mx-2 my-1 text-sm rounded-full border border-txtPrimary bg-bgPrimary min-w-[80px] sm:min-w-[100px] w-[80px] sm:w-[100px] flex justify-center items-center">Romance</p>
                            <p className="p-1 sm:p-2 mx-1 sm:mx-2 my-1 text-sm rounded-full border border-txtPrimary bg-bgPrimary min-w-[80px] sm:min-w-[100px] w-[80px] sm:w-[100px] flex justify-center items-center">Romance</p>
                            <p className="p-1 sm:p-2 mx-1 sm:mx-2 my-1 text-sm rounded-full border border-txtPrimary bg-bgPrimary min-w-[80px] sm:min-w-[100px] w-[80px] sm:w-[100px] flex justify-center items-center">Romance</p>
                        </div>
                        <div className="flex items-center py-4 flex-wrap text-bgDark">
                            <button className="flex rounded-lg items-center bg-brPrimary p-[14px] sm:p-5 mx-1 sm:mx-2 my-1 text-sm w-[47%] sm:w-[200px] justify-center"><FaPlay size={15} className="mr-2"/>Watch Now</button>
                            <button className="flex rounded-lg items-center bg-brPrimary p-[14px] sm:p-5 mx-1 sm:mx-2 my-1 text-sm w-[47%] sm:w-[200px] justify-center"><FaHeart size={15} className="mr-1 sm:mr-2"/>Add to Favourites</button>
                            <button className="flex rounded-lg items-center bg-brPrimary p-4 sm:p-5 mx-1 sm:mx-2 my-1 text-sm"><FaShare size={15}/></button>
                        </div>
                    </div>                    
                </div>

            </div>
        </div>

        </>
    )
}