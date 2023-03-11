import { Link } from "react-router-dom"

export default function Sidelist({slides}:any){
    return (
        <>
            <div className=" float-right mr-5 w-[300px]">
                {
                    slides.map((slide:string,i:number)=>{
                        return <Link to='/' key={i} className='border-txtPrimary border rounded-md my-3 flex justify-center items-center'>
                                    <div className="w-[70px] h-[100px]">
                                        <img src={slide} alt='sidelist' className="rounded-tl-md rounded-bl-md object-cover w-[100%] h-[100%]"/>
                                    </div> 
                                    <div className="text-txtPrimary px-3">
                                        <div className="text-txtSecondary text-[11px]">
                                        <i className="fa fa-film pr-2 text-lg"/>
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