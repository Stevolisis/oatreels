
export default function Header(){

    return(
        <header className="ml-[100px] flex p-10 justify-between">
            <div className="flex-1 border-l-8 pl-3 border-brTertiary">
                <h2 className="flex-1 font-bold text-5xl text-txtPrimary">
                Find your favourite Movies, Tv Shows and more...
                </h2>
            </div>
            <div className="flex-1">
                <input type='search' className="outline-none text-txtPrimary px-5 py-4 w-full bg-bgTertiary rounded-full"/>
                <i className="fa fa-search ml-[-30px] text-white"/>
            </div>
        </header>
    )
}