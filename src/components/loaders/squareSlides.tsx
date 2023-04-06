import { Link } from "react-router-dom"

export default function SquareSliderLoader(){
    const slides:number[]=[1,2,3,4,5,6,7,8]

	return(
		<>
            {slides.map((slide:number,i:number):any=>{
                return <div className="mx-3 my-4" key={i}>
                        <div className="w-[180px] min-w-[180px] h-[180px] sm:w-[230px] sm:min-w-[230px] sm:h-[230px] md:w-[250px] md:min-w-[250px] md:h-[250px] skeleton-load">
                        </div>
                        <div className="flex justify-center items-center py-3 text-txtPrimary">
                            <p className="w-[120px] h-3 rounded-full skeleton-load"></p>
                        </div>
                        </div>
            })}
		</>
	)
}