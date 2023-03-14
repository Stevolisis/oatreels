import { Link } from "react-router-dom"

export default function Sidelist(){
    const slides:string[]=['/pexel1.jpg','/pexel8.jpg','/pexel9.jpg','/pexel11.jpg'];
    return (
        <>
            <div className="mt-5 md:mt-0 md:float-right mr-12 w-full md:w-[300px]">
                <div>
                    <p className="font-semibold md:font-bold text-2xl md:text-3xl text-txtPrimary border-l-8 pl-2
                     md:pl-3 border-brTertiary md-pb-2">
                        Top Rated
                    </p>
                </div>
                <div className="flex md:block flex-wrap justify-evenly">
                {
                    slides.map((slide:string,i:number)=>{
                        return <Link to='/' key={i} className='flex-2  w-[47%] md:w-auto border-txtPrimary border my-3 flex justify-start items-center'>
                                    <div className="w-[70px] h-[100px]">
                                        <img src={slide} alt='sidelist' className=" rounded-bl-md object-cover w-[100%] h-[100%]"/>
                                    </div> 
                                    <div className="text-txtPrimary px-3">
                                        <div className="text-txtPrimary text-[11px]">
                                        <i className="fa fa-film pr-1"/>
                                        <span className="text-[10px] md:text-[13px] text-txtPrimary">1:23</span>
                                        </div>

                                        <div>
                                            <h3 className="text-[13px] sm:text-[15px] font-semibold md:font-bold break-all line-clamp-2">The Super Mario Movie</h3>
                                            <p className="text-txtSecondary text-[10px] md:text-[13px]">Watch the new trailer</p>
                                        </div>

                                    </div>
                                </Link>
                    })
                }
                </div>
            </div>
        </>
    )
}