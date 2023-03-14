import { Link } from "react-router-dom"

export default function Sidelist(){
    const slides:string[]=['/pexel1.jpg','/pexel8.jpg','/pexel9.jpg','/pexel11.jpg'];
    return (
        <>
            <div className=" float-right mr-12 w-[300px]  ">
                <div><p className="font-bold text-3xl text-txtPrimary border-l-8 pl-3 border-brTertiary pb-2">Top Rated</p></div>
                {
                    slides.map((slide:string,i:number)=>{
                        return <Link to='/' key={i} className='border-txtPrimary border my-3 flex justify-center items-center'>
                                    <div className="w-[70px] h-[100px]">
                                        <img src={slide} alt='sidelist' className=" rounded-bl-md object-cover w-[100%] h-[100%]"/>
                                    </div> 
                                    <div className="text-txtPrimary px-3">
                                        <div className="text-txtPrimary text-[11px]">
                                        <i className="fa fa-film pr-2 text-md"/>
                                        <span className="text-txtPrimary">1:23</span>
                                        </div>

                                        <div>
                                            <h3 className="text-[15px] font-bold">The Super Mario Movvvvvvvie</h3>
                                            <p className="text-[13px]">Watch the new trailer</p>
                                        </div>

                                    </div>
                                </Link>
                    })
                }
            </div>
        </>
    )
}