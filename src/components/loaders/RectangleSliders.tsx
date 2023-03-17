import { Link } from "react-router-dom"
import { FaHeart, FaRegHeart } from "react-icons/fa";

export default function SliderLoader(){
    const slides:number[]=[1,2,3,4,5,6,7,8]

	return(
		<>
            {slides.map((slide:number,i:number):any=>{
                return <Link to='/#' key={i} className='w-[250px] min-w-[250px]  md:w-[300px] md:min-w-[300px] m-3'>
                            <div className="skeleton-load h-[130px] md:h-[150px] w-[100%]">
                            </div>
                            <div className="text-txtPrimary pt-2">
                                <p className="w-[200px] h-2 rounded-full skeleton-load"></p>
                            </div>
                            <div className="flex justify-between items-center text-txtPrimary">
                                <p className="w-32 h-2 mt-1 rounded-full skeleton-load"></p>
                            </div>
                    </Link>
            })}
		</>
	)
}