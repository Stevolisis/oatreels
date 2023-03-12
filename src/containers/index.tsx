import MainSlider from '../components/MainSlider';
import Sliders from '../components/Sliders';
import Sidelist from "../components/Sidelist";
import Carousel from '../components/Carousel';
import Listings from '../components/Listings';
import Footer from '../components/Footer';

export default function Home(){
    const slides:string[]=['/pexel1.jpg','/pexel8.jpg','/pexel9.jpg','/pexel11.jpg','/pexel13.jpg',
    '/pexel14.jpg','/pexel1.jpg','/pexel8.jpg','/pexel9.jpg'];

    return(
        <>
            <div className="text-primary">
                <Sidelist/>
                <div className='ml-[120px]'>
                    <MainSlider slides={slides}/>
                    <Sliders slides={slides}/> 
                    <Carousel slides={slides}/>
                    <Carousel slides={slides}/>
                    <Listings slides={slides}/>
                    <Carousel slides={slides}/>
                    <Carousel slides={slides}/>
                    <Listings slides={slides}/>
                    <Footer/>
                </div>
            </div>
        </>
    )
}