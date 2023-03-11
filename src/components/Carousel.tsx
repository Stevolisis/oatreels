import { Link } from "react-router-dom"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';

export default function Carousel({slides}:any){

    return(
        <>
			<div className="mr-[30px] py-8">
                <p className="font-bold text-4xl py-4 text-txtPrimary ml-3">Recent Release</p>
			<div className="w-[100%] flex justify-start items-center overflow-auto">
				{slides.map((slide:string,i:number):any=>{
					return  <div key={i} className='w-[16%] mx-3 min-w-[16%]'>
                                <Link to='/#'  className='w-[100%] h-[25vw] block'>
                                        <img src={slide} className='object-cover w-[100%] h-[100%]' alt='movie'/>
                                </Link>
                                <div className="py-3">
                                    <div><p className="font-bold text-txtPrimary text-lg ">The Shawshank Redemption</p></div>
                                    <div><p className="text-sm text-txtSecondary ">Action/Rivelry</p></div>
                                    <div>
                                        <i className="fa fa-star text-[gold]"/>
                                        <span className="text-txtPrimary text-[12px] pl-2">7.4</span>
                                    </div>
                                </div>
                            </div>
				})}
			</div>
			</div>        
        </>
    )
}