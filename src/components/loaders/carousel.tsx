import { Link } from "react-router-dom"


export default function CarouselLoader(){
    const slides:number[]=[1,2,3,4,5,6,7,8]


    return(
        <>
            {slides&&slides.map((slide:number,i:number):any=>{
                return  <div key={i}  className='duration-300 hover:scale-105 mx-3 w-[130px] min-w-[130px] sm:w-[150px] sm:min-w-[150px] md:w-[180px] md:min-w-[180px]'>
                            <Link to='/#' className='skeleton-load w-[100%] h-[280px] sm:h-[343px] block'>
                            </Link>
                            <div className="py-3">
                                <div><p className="w-full h-2 rounded-full skeleton-load"></p></div>
                                <div><p className="my-2 w-[68px] sm:w-[80px] h-2 rounded-full skeleton-load"></p></div>
                                <div className="flex justify-between items-center">
                                    <div className="w-[90px] sm:w-[110px] h-2 rounded-full skeleton-load">----</div>                                    
                                </div>
                            </div>
                        </div>
            })}     
        </>
    )
}