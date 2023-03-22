import { RWebShare } from "react-web-share";

export default function WebShare({link,title,children}:any){

    return(
        <RWebShare
            data={{
            text: "Get your favourite movie, tv show and much more...",
            url: window.location.href,
            title: title,
            }}
            onClick={() => console.log("shared successfully!")}
        >
            {children}
        </RWebShare>
    )
}