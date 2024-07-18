import React from "react";
import { YMaps, Map, Placemark, FullscreenControl } from '@pbe/react-yandex-maps';
import phone from './assets/images/phone.svg'

function Footer() {
    const defaultState = {
        center: [55.751574, 37.573856],
        zoom: 5,
    };
    return (

        <div className="d-flex justify-content-between bluebg vw-100 p-0 m-0">
            <div className="leftDiv">
                <div className="FooterText">
                    <h2 className="FooterText-h2">г.Москва</h2>
                    <h2 className="FooterText-h2">ул. Серпухоская 14 </h2>
                    <h1 className="FooterText-h1">+7 905 785 44 55</h1>
                    <img
                        src={phone}
                        height="24"
                        width="24"
                        className="d-block img-mar-10"
                        alt="logo"
                    />
                    <h3 className="FooterText-h3">ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ</h3>
                    <h4 className="FooterText-h4">ООО «Ткани» ИНН 7838329727</h4>
                    <h4 className="FooterText-h4">2023</h4>
                </div>
            </div>
            <div className="rightDiv">
                <YMaps>
                    <Map
                        width='100%'
                        height={550}
                        defaultState={defaultState}>
                        <Placemark geometry={[55.728053, 37.623780]} />
                        <FullscreenControl />
                    </Map>

                </YMaps>
            </div>
        </div>
    )
}
export default Footer