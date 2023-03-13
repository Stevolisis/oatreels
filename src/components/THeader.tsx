import Filter from "./Filter";

export default function Header(){
    const slides:string[]=['/pexel1.jpg','/pexel8.jpg','/pexel9.jpg','/pexel11.jpg','/pexel13.jpg',
    '/pexel14.jpg','/pexel1.jpg','/pexel8.jpg','/pexel9.jpg'];

    return(
        <header className="ml-[100px] flex p-10 justify-between">
            <div className="flex-1 border-l-8 pl-3 border-brTertiary animateBorder">
                <h2 className="flex-1 font-bold text-5xl text-txtPrimary">
                <p className="animateText">Find your favourite</p>
                <p className="animateText2">Movies, Tv Shows </p> 
                <p className="animateText3">and more...</p>
                </h2>
            </div>
            <Filter slides={slides}/>
        </header>
    )
}