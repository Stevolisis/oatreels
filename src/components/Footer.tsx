import {FaTwitter, FaInstagram, FaFacebook, FaTiktok, FaYoutube} from 'react-icons/fa'
import { Link } from 'react-router-dom'
export default function Footer(){

    return(
        <footer className='text-txtPrimary flex justify-between p-12 border-t border-brPrimary '>
            <div className='w-3/5 '>
                <div className='flex items-center'>
                    <img className='w-12 h-12' src='/logo192.png' alt='logo'/>
                    <span className='pl-3 font-bold text-brPrimary'>OATREELS</span>
                </div>

                <div>
                Oatreels is top of free streaming website, where to watch movies online 
                free without registration required. With a big database and great features, 
                we're confident FMovies is the 
                best free movies online website in the space that you can't simply miss!
                </div>
                <div >
                    <Link to='/'><FaTwitter/></Link>
                    <Link to='/'><FaInstagram/></Link>
                    <Link to='/'><FaFacebook/></Link>
                    <Link to='/'><FaTiktok/></Link>
                    <Link to='/'><FaYoutube/></Link>
                </div>
            </div>

            <div className=''>
            <Link to='/' className='block'>Action Movies</Link>
            <Link to='/' className='block'>Horror Movies</Link>
            <Link to='/' className='block'>Thriller Movies</Link>
            <Link to='/' className='block'>Sci-fi Movies</Link>
            </div>

            <div className=''>
            <Link to='/' className='block'>Help Center</Link>
            <Link to='/' className='block'>Terms Of Use</Link>
            <Link to='/' className='block'>Privacy</Link>
            <Link to='/' className='block'>Contact Us</Link>
            </div>

        </footer>
    )
}