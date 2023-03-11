import { Link } from "react-router-dom"

export default function Slider({slides}:any){

	return(
		<>
			<div className="mr-[30px]">
			<div className="flex overflow-auto w-[100%]">
				{slides.map((slide:string,i:number):any=>{
					return <Link to='/#' key={i} className='w-[30%] min-w-[25%] m-3'>
								<div className="w-[100%]">
									<img src={slide} className="rounded-md h-[150px] w-[100%]" alt='movie'/>
								</div>
								<div className="text-txtPrimary pt-2">
									<p className="text-[11px]">2019.PG.{slide}</p>
									<p>Beyond Earth</p>
								</div>
						   </Link>
				})}
			</div>
			</div>
		</>
	)
}