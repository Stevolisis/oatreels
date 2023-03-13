import { FaBookmark, FaFilm, FaHeart, FaTv } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar(){

    return(
        <nav className="flex flex-col bg-brPrimary h-[90%] p-5 mx-5 rounded-full">
            <div className="flex justify-center items-center pt-5">
                <i className="fa fa-film text-bgPrimary"/>
            </div>
            <div className="flex flex-col items-center justify-center flex-1">
                <Link to='/'><FaTv size={17} className="my-3"/></Link>
                <Link to='/'><FaFilm size={17} className="my-3"/></Link>
                <Link to='/'><FaBookmark size={17} className="my-3"/></Link>
                <Link to='/'><FaHeart size={17} className="my-3"/></Link>
            </div>

            <div>
            <img src="/profilePic.jpg" alt='navbar' className="w-10 h-10 rounded-full"/>
            </div>

        </nav>
    )
}