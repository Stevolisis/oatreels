import { Link } from "react-router-dom"
import {MdChevronRight, MdChevronLeft} from 'react-icons/md'
import CircleSliderLoader from "./loaders/circlesliders";

export default function CircleSlider({slides,heading,gender,character}:any){
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
			<div className="md:mr-[30px] mt-10">
					<div className="border-l-8 pl-3 border-brTertiary">
						<p className="font-semibold md:font-bold text-2xl md:text-3xl pl-0 md:pl-3 text-txtPrimary">
							{heading}
						</p>
					</div>
					<div className="flex justify-between items-center">
						<MdChevronLeft size={60} onClick={()=>prevslide()} className='hidden sm:block mr-[-40px] scrollBtn'/>
						<div id={`${id}`} className="flex overflow-auto scrollbar-hide scroll-smooth w-[100%] ">
							{slides.length===0 ? <CircleSliderLoader/> :slides.filter((fill:any)=>fill.gender===gender).map((slide:any,i:number):any=>{
								return <div className="mx-3 my-4" key={i}>
                                        <div className="bg-loaderShade rounded-full w-[180px] min-w-[180px] h-[180px] sm:w-[230px] sm:min-w-[230px] sm:h-[230px] md:w-[250px] md:min-w-[250px] md:h-[250px]">
                                        <Link to={`/movie/${slide.id}`} key={i} className='w-[180px] min-w-[180px] h-[180px] sm:w-[230px] sm:min-w-[230px] sm:h-[230px] md:w-[250px] md:min-w-[250px] md:h-[250px]'>
                                            <img className="object-cover w-full h-full rounded-full" src={`${process.env.REACT_APP_MOVIE_IMAGE}/w500${slide.profile_path}`} alt='actors'/>
                                        </Link>
                                        </div>
                                        <div className="align-center py-3 text-txtPrimary">
											<p className="font-semibold text-base text-center sm:text-lg">{slide.name||slide.original_name}</p>
											{character&&<p className="text-sm text-center text-brSecondary">{slide.character}</p>}
                                        </div>
                                       </div>
							})}
						</div>
						<MdChevronRight size={60} onClick={()=>nextslide()} className='hidden sm:block ml-[-40px] p-[-20px] scrollBtn'/>
					</div>
			</div>
		</>
	)
}