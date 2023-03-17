import { Link } from "react-router-dom"

export default function SidelistLoader(){
    const slides:number[]=[1,2,3,4,5,6,7,8]

    return (
        <>
                {
                    slides.map((slide:number,i:number)=>{
                        return (i<4) && <Link to='/' key={i} className='flex-2 h-[90px] sm:h-[100px]  w-[47%] md:w-auto border-txtPrimary border my-3 flex justify-start items-center'>
                                    <div className="w-[70px] h-[100%] skeleton-load">
                                    </div> 
                                    <div className="text-txtPrimary px-3">
                                        <div className="w-[50px] h-2 rounded-full skeleton-load">
                                        </div>

                                        <div>
                                            <h3 className="w-[200px] h-2 rounded-full skeleton-load my-2"></h3>
                                            <p className="w-[100px] h-2 rounded-full skeleton-load"></p>
                                        </div>

                                    </div>
                                </Link>
                    })
                }
        </>
    )
}