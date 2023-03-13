import Filter from "./Filter";

export default function Header(){
    const slides:string[]=['/pexel1.jpg','/pexel8.jpg','/pexel9.jpg','/pexel11.jpg','/pexel13.jpg',
    '/pexel14.jpg','/pexel1.jpg','/pexel8.jpg','/pexel9.jpg'];

    return(
        <header className="ml-[100px] flex p-10 justify-between">
            <div className="flex-1 border-l-8 pl-3 border-brTertiary">
                <h2 className="flex-1 font-bold text-5xl text-txtPrimary">
                Find your favourite Movies, Tv Shows and more...
                </h2>
            </div>
            <Filter slides={slides}/>
        </header>
    )
}