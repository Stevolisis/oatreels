import {FaTwitter, FaInstagram, FaFacebook, FaTiktok, FaYoutube, FaGithub, FaLinkedin} from 'react-icons/fa'
import { Link } from 'react-router-dom'
export default function Footer(){

    return(
        <footer className='text-txtPrimary mt-20 sm:mt-28  border-t border-brPrimary '>
            <div className='text-sm md:text-base flex-col sm:flex-row flex  py-9 md:py-12 px-5 sm:px-16 md:px-28'>
                <div className='sm:w-3/5 '>
                    <div className='flex items-center'>
                        <img className='w-12 h-12' src='/logo.png' alt='logo'/>
                        <span className='pl-3 font-bold text-brPrimary'>OATREELS</span>
                    </div>

                    <div className='md:pr-2'>
                    Oatreels is top of free streaming website, where to watch movies online 
                    free without registration required. With a big database and great features, 
                    we're confident Oatreels is the 
                    best free movies online website in the space that you can't simply miss!
                    </div>
                    <div className='flex py-5 pr-5 md:pr-2'>
                        <Link className='px-3 hover:text-brSecondary transition-5' to='/'><FaTwitter/></Link>
                        <Link className='px-3 hover:text-brSecondary transition-5' to='/'><FaInstagram/></Link>
                        <Link className='px-3 hover:text-brSecondary transition-5' to='/'><FaFacebook/></Link>
                        <Link className='px-3 hover:text-brSecondary transition-5' to='/'><FaTiktok/></Link>
                        <Link className='px-3 hover:text-brSecondary transition-5' to='/'><FaYoutube/></Link>
                    </div>
                    <div className='pb-4'>
                        <a className='py-2 flex items-center hover:text-brSecondary transition-5 ' target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/steven-joseph-6871a2237/'>
                            <FaLinkedin/>
                            <p className='text-xs pl-2'>https://www.linkedin.com/in/steven-joseph-6871a2237/</p>
                        </a>
                        <a className='flex items-center hover:text-brSecondary transition-5 ' target="_blank" rel="noreferrer" href='https://github.com/Stevolisis'>
                            <FaGithub/>
                            <p className='text-xs pl-2'>https://github.com/Stevolisis</p>
                        </a>
                    </div>
                </div>

                <div className='flex justify-around sm:w-2/5 sm:pl-3'>
                <div className='pr-5 md:pr-2'>
                <Link to='/' className='block hover:text-brSecondary transition-5 py-2'>Action Movies</Link>
                <Link to='/' className='block hover:text-brSecondary transition-5 py-2'>Horror Movies</Link>
                <Link to='/' className='block hover:text-brSecondary transition-5 py-2'>Thriller Movies</Link>
                <Link to='/' className='block hover:text-brSecondary transition-5 py-2'>Sci-fi Movies</Link>
                </div>

                <div className=''>
                <Link to='/' className='block hover:text-brSecondary transition-5 py-2'>Help Center</Link>
                <Link to='/' className='block hover:text-brSecondary transition-5 py-2'>Terms Of Use</Link>
                <Link to='/' className='block hover:text-brSecondary transition-5 py-2'>Privacy</Link>
                <Link to='/' className='block hover:text-brSecondary transition-5 py-2'>Contact Us</Link>
                </div>
                </div>
            </div>

            <div className='flex justify-center text-bgPrimary p-7 text-[13px] md:text-sm bg-brPrimary'>
                <p>Copyright © 2023 OATREELS</p>
            </div>

        </footer>

    )
}