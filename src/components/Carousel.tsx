import { Link } from "react-router-dom"

export default function Carousel({slides}:any){

    return(
        <>
			<div className="mr-[30px] py-8">
                <p className="font-bold text-4xl py-4 text-txtPrimary">Recent Release</p>
			<div className="w-[100%]">
				{slides.map((slide:string,i:number):any=>{
					return  <div key={i} className='w-[18%]'>
                                <Link to='/#'  className='w-[100%] h-[25vw] block'>
                                        <img src={slide} className='object-cover w-[100%] h-[100%]' alt='movie'/>
                                </Link>
                                <div>
                                    <div><p>The Shawshank Redemption</p></div>
                                    <div><p>Action/Rivelry</p></div>
                                    <div>
                                        <i className="fa fa-star"/>
                                        <p>7.4</p>
                                    </div>
                                </div>
                            </div>
				})}
			</div>
			</div>        
        </>
    )
}