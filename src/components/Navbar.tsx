
export default function Navbar(){

    return(
        <nav className="flex flex-col bg-brPrimary h-[90%] p-5 mx-5 rounded-full">
            <div className="flex justify-center items-center pt-5">
                <i className="fa fa-film text-bgPrimary"/>
            </div>
            <div className="flex flex-col items-center">
            <i className="fa fa-gallery text-bgPrimary py-5"/>
            <i className="fa fa-grid text-bgPrimary py-5"/>
            <i className="fa fa-tv text-bgPrimary py-5"/>
            <i className="fa fa-bookmark text-bgPrimary py-5"/>
            </div>

            <div>
            <img src="/profilePic.jpg" alt='navbar' className="w-10 h-10 rounded-full"/>
            </div>

        </nav>
    )
}