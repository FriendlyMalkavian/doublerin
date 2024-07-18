import React from "react";
import logo from './TECOPACK.svg'
import PopUpPrice from "./PopUpPrice";

function OptoButton() {
    return (
        <div className="vw-100 OptoButton">
            <div className="d-flex flex-column justify-content-center ">
                <div className="d-flex justify-content-center">
                    <img
                        src={logo}
                        height="28"
                        width="106"
                        className="d-block logo-p"
                        alt="logo"
                    />
                </div>
                <div className="d-flex justify-content-center">
                    <p className="OptoParagraph">Если вам нужен дублерин от одного рулона и более - для вас оптовый прайс лист</p>
                </div>
                <div className="d-flex justify-content-center">
                    <PopUpPrice/>
                </div>
            </div>
        </div>
    )
}
export default OptoButton