import { Link } from 'react-router-dom';


export default function ListingsLoader(){
    const slides:number[]=[1,2,3,4,5,6,7,8]


    return(
    <>
            {slides.map((slide:number,i:number):any=>{
                return  <Link to='/' key={i}  className='flex duration-300 w-[290px] min-w-[290px] sm:w-[350px] mx-3 sm:min-w-[350px]'>
                <div className='w-[100px] h-28 sm:h-[140px] skeleton-load'>
                </div>
                <div className='flex-1 px-3 text-txtPrimary'>
                <p className='w-[200px] h-2 rounded-full skeleton-load my-1'></p>
                <p className='w-[200px] h-2 rounded-full skeleton-load my-1'></p>
                <p className='w-[200px] h-2 rounded-full skeleton-load my-1'></p>
                <p className='w-[200px] h-2 rounded-full skeleton-load my-1'></p>
                <p className='w-[200px] h-2 rounded-full skeleton-load my-1'></p>
                    <p className='w-[80px] mt-3 h-2 rounded-full skeleton-load'></p>
                </div>
            </Link>
            })}   
        </>
    )
}