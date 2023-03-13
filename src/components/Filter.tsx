import { Link } from "react-router-dom"


export default function Filter({slides}:any){

    return(
        <>
        <div className="flex-1">
                <div>
                    <input type='search' placeholder="Search movies, series, novellas ..." className="outline-none 
                    text-bgPrimary placeholder-txtSecondary px-5 py-4 w-full bg-brTertiary rounded-full"/>
                    <i className="fa fa-search ml-[-30px] text-white"/>
                </div>
                <div className="z-20 absolute w-[42vw] mt-2 rounded-xl bg-brSecondary px-2">
                    {slides.map((slide:string,i:number):any=>{
                        return <Link to='/' key={i} className='block p-3 border-b'>
                                    {slide}
                               </Link>
                    })}
                </div>
        </div>
        </>
    )
}