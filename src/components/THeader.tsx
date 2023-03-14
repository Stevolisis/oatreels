import Filter from "./Filter";

export default function Header(){
    const slides:string[]=['/pexel1.jpg','/pexel8.jpg','/pexel9.jpg','/pexel11.jpg','/pexel13.jpg',
    '/pexel14.jpg','/pexel1.jpg','/pexel8.jpg','/pexel9.jpg'];

    return(
        <header className="md:ml-[100px] ml-0 flex sm:p-7 justify-between">
            <div className=" hidden sm:block flex-1 border-l-8 pl-3 border-brTertiary animateBorder">
                <h2 className="flex-1 font-bold text-4xl md:text-5xl text-txtPrimary">
                <p className="animateText">Find your favourite</p>
                <p className="animateText2">Movies, Tv Shows </p> 
                <p className="animateText3">and more...</p>
                </h2>
            </div>
            <Filter slides={slides}/>
        </header>
    )
}