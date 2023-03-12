import { Link } from "react-router-dom"
import {MdChevronRight, MdChevronLeft} from 'react-icons/md'

export default function Slider({slides}:any){
    const id=''+Math.random();

    const nextslide=()=>{
        let element:any=document.getElementById(`${id}`);
        element.scrollLeft=element.scrollLeft+400;
    }
    
    const prevslide=()=>{
        let element:any=document.getElementById(`${id}`);
        element.scrollLeft=element.scrollLeft-400;
    }

	return(
		<>
			<div className="mr-[30px] mt-10">
				<p className="font-bold text-4xl py-4 text-txtPrimary ml-3">Featured Actors</p>
					<div className="flex justify-between items-center">
						<MdChevronLeft size={60} onClick={()=>prevslide()} className='mr-[-40px] scrollBtn'/>
						<div id={`${id}`} className="flex overflow-auto scrollbar-hide scroll-smooth w-[100%] ">
							{slides.map((slide:string,i:number):any=>{
								return <Link to='/#' key={i} className='w-[30%] min-w-[25%] m-3'>
											<div className="w-[100%]">
												<img src={slide} className="object-cover rounded-md h-[150px] w-[100%]" alt='movie'/>
											</div>
											<div className="text-txtPrimary pt-2">
												<p className="text-[11px]">2019.PG.{slide}</p>
												<p>Beyond Earth</p>
											</div>
									</Link>
							})}
						</div>
						<MdChevronRight size={60} onClick={()=>nextslide()} className='ml-[-40px] p-[-20px] scrollBtn'/>
					</div>
			</div>
		</>
	)
}