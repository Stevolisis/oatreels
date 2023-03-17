import { Link } from "react-router-dom"
import SidelistLoader from "./loaders/sidelist"

export default function Sidelist({heading,slides}:any){

    return (
        <>
            <div className="mt-5 md:mt-0 md:float-right mr-12 w-full md:w-[300px]">
                <div>
                    <p className="font-semibold md:font-bold text-2xl md:text-3xl text-txtPrimary border-l-8 pl-2
                     md:pl-3 border-brTertiary md-pb-2">
                        {heading}
                    </p>
                </div>
                <div className="flex md:block flex-wrap justify-evenly">
                {
                    slides.length===0?<SidelistLoader/>:slides.map((slide:any,i:number)=>{
                        return (i<4) && <Link to='/' key={i} className='flex-2 h-[90px] sm:h-[100px]  w-[47%] md:w-auto border-txtPrimary border my-3 flex justify-start items-center'>
                                    <div className="w-[70px] h-[100%]">
                                        <img src={process.env.REACT_APP_MOVIE_IMAGE+slide.poster_path} alt='sidelist' className=" rounded-bl-md object-cover w-[100%] h-[100%]"/>
                                    </div> 
                                    <div className="text-txtPrimary px-3">
                                        <div className="text-txtPrimary text-[11px]">
                                        <i className="fa fa-film pr-1"/>
                                        <span className="text-[10px] md:text-[13px] text-txtPrimary">1:23</span>
                                        </div>

                                        <div>
                                            <h3 className="text-[13px] leading-4 sm:text-[15px] font-semibold md:font-bold break-all line-clamp-2">{slide.original_name||slide.original_title}</h3>
                                            <p className="text-txtSecondary leading-3 py-1 text-[10px] md:text-[13px] line-clamp-2">Watch the new trailer</p>
                                        </div>

                                    </div>
                                </Link>
                    })
                }
                </div>
                <div className="w-full text-txtPrimary p-2">
                    <Link to='/' className="border-b border-b-brPrimary">See More</Link>
                </div>
            </div>
        </>
    )
}