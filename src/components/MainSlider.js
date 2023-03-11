import { Link } from "react-router-dom";

export default function MainSlider({slides}){
    return (
        <>
            <div className="mr-[350px]">
                <Link to='/' className="block w-[100%] h-[505px]">
                    <img className="w-[100%] h-[100%]" src='/pexel8.jpg' alt="mainslider"/>
                </Link>
            </div>
        </>
    )
}