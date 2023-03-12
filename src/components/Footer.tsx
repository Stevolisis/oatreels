import {FaTwitter, FaInstagram, FaFacebook, FaTiktok, FaYoutube} from 'react-icons/fa'
import { Link } from 'react-router-dom'
export default function Footer(){

    return(
        <footer className='text-txtPrimary'>
            <div>
                <div><img src='/favicon.svg' alt='logo'/>OATREELS</div>
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

            <div>
            <Link to='/'>Action Movies</Link>
            <Link to='/'>Horror Movies</Link>
            <Link to='/'>Thriller Movies</Link>
            <Link to='/'>Sci-fi Movies</Link>
            </div>

            <div>
            <Link to='/'>Help Center</Link>
            <Link to='/'>Terms Of Use</Link>
            <Link to='/'>Privacy</Link>
            <Link to='/'>Contact Us</Link>
            </div>

        </footer>
    )
}