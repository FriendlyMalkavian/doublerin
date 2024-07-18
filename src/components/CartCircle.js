import React from "react";
import circle from "./Rectangle 1.svg"

export default function CartCircle(){
    return(
        <>
        <div className="fixed top-[136px] right-[89px]">
            <img
                src={circle}
                height="77px"
                width="77px"
                alt="tradecart"
            >
            </img>
        </div>
        </>
    )
}