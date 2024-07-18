import React from "react";
import green from "./assets/images/bg.png"
import second from "./assets/images/second.png"
import CartCircle from "./CartCircle";
function Hat() {
    return (
        <>
        <CartCircle/>
        <div className="d-flex justify-content-between vw-100 p-0 m-0">
            <div className="leftDiv">
                <img
                    src={green}
                    alt="green"
                    className="left-picture"
                >
                </img>
            </div>
            <div className="rightDiv">
                <img
                    src={second}
                    alt="green"
                    className="right-picture"
                >
                </img>
                <h1 className="right-text-heading">ПРОДАЖА ДУБЛЕРИНА</h1>
                <p className="right-text-paragraph">оптом и в розницу c доставкой</p>
                <button className="chooseButton buttonm-1">ВЫБРАТЬ ДУБЛЕРИН</button>
            </div>
        </div>
        </>
    )
}
export default Hat;