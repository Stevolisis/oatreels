import { Link } from "react-router-dom";

export default function MainSlider({slides}){
    return (
        <>
            <div className="mr-[340px]">
                <Link to='/' className="block w-[100%] h-[505px]">
                    <img className="w-[100%] h-[100%]" src='/pexel8.jpg' alt="mainslider"/>
                </Link>
                <div className="flex items-center justify-between mt-[-279px]">
                <div><i className="fa fa-arrow-left p-4 bg-black border border-txtPrimary rounded-md text-txtPrimary"/></div>
                <div><i className="fa fa-arrow-right p-4 bg-black border border-txtPrimary rounded-md text-txtPrimary"/></div>
                </div>
            </div>
        </>
    )
}