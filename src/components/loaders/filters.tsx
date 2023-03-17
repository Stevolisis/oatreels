import { Link } from "react-router-dom"


export default function FiltersLoader(){
    const slides:number[]=[1,2,3,4,5,6,7,8]


    return(
        <>
            {slides.map((filter:number,i:number):any=>{
                return <Link to='/' key={i} className='flex py-2 border-b'>
                            <div className="w-[50px] h-[60px] sm:w-[60px] sm:h-[80px] skeleton-load">
                            </div>
                            <div className="pl-3 w-[70%]">
                            <p className="w-full h-2 rounded-full skeleton-load my-1"></p>
                            <p className="w-[60%] h-2 rounded-full skeleton-load my-1"></p>
                            <p className="w-[30%] h-2 rounded-full skeleton-load my-1"></p>
                            </div>
                        </Link>
            })}
        </>
    )
}