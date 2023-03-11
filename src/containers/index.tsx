import Sliders from '../components/Sliders';

export default function Home(){
    const slides:string[]=['/pexel1.jpg','/pexel8.jpg','/pexel9.jpg','/pexel11.jpg','/pexel13.jpg',
    '/pexel14.jpg','/pexel1.jpg','/pexel8.jpg','/pexel9.jpg'];

    return(
        <>
            <div className="text-primary">
                <Sliders slides={slides}/> 
            </div>
        </>
    )
}