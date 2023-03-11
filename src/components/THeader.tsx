
export default function Header(){

    return(
        <header className="ml-[120px] flex p-10 justify-between">
            <div><h2 className="text-txtPrimary text-4xl">Find Movies, Tv Shows and more...</h2></div>
            <div className="w-3/5">
                <input type='search' className="outline-none text-txtPrimary px-5 py-4 w-full bg-bgTertiary rounded-full"/>
                <i className="fa fa-search ml-[-30px] text-white"/>
            </div>
        </header>
    )
}