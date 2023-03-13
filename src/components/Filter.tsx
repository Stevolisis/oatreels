import { Link } from "react-router-dom"


export default function Filter({slides}:any){

    return(
        <>
        <div className="flex-1">
                <div className="w-[46vw]">
                    <input type='search' placeholder="Search movies, series, novellas ..." className="outline-none 
                    text-bgPrimary placeholder-txtSecondary px-5 py-4 w-full bg-brTertiary rounded-full"/>
                    <i className="fa fa-search ml-[-30px] text-bgSecondary"/>
                </div>
                {/* <div className="z-20 absolute w-[46vw] mt-2 rounded-xl bg-brSecondary px-2">
                    {slides.map((slide:string,i:number):any=>{
                        return <Link to='/' key={i} className='flex py-2 border-b'>
                                    <div className="w-[60px] h-[80px]">
                                        <img src={slide} alt='filterImg' className="w-full h-full object-cover"/>
                                    </div>
                                    <div className="pl-3">
                                    <p className="font-bold text-[15px]">Scooby Doo! Mystery Incoperated</p>
                                    <p className="text-[10px]">2010</p>
                                    <p className="text-[12px]">Frank Welker, Mindy Cohn</p>
                                    </div>
                               </Link>
                    })}
                </div> */}
        </div>
        </>
    )
}