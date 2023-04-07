import FavouritesListing from "../components/favouritesListing";
import { getFavourites } from "../Redux/favourites"
import { UseAppDispatch, useAppSelector } from "../Redux/store"


export default function Favourites(){
    const dispatch=UseAppDispatch();
    const favourites=useAppSelector(getFavourites);

    return(
        <>
            <div className="text-txtPrimary">                
                <div className='md:ml-[120px] ml-0 px-3 sm:px-5'>
                    <FavouritesListing slides={favourites} heading='Your favourite Tvs and Movies'/>
                </div>
            </div>
        </>
    )
}