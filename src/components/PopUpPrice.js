import React from "react";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import green from "./assets/images/bg.png"
import '../custom.scss'

function PopUpPrice() {
    const [show, setShow] = useState(false);

    return (
        <>
            <Button className="chooseButton button-m2 square rounded-0" onClick={() => setShow(true)}>
                ОПТОВЫЙ ПРАЙС
            </Button>

            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="customModal"
                size="lg"
            >
                <Modal.Body className="border-0 modalText">
                    <h1 className="text-center text-2xl mb-[30px]">ОПТОВЫЙ ПРАЙС</h1>
                    <div className="border-b border-app-black grid grid-rows-2 grid-cols-12 h-16 justify-left pb-[20px] mt-5">
                        <div className="modalLeftDiv col-start-1 row-start-1 row-span-2">
                            <img
                                src={green}
                                alt="green"
                                className="modal-left-picture"
                            >
                            </img>
                        </div>
                        <div className="row-start-1 col-start-2 col-span-8">
                            <h2 className="text-sm" >Дублерин клеевой для ткани 150х100 см, 75 г/кв2</h2>
                        </div>
                        <div className="row-start-1 col-start-12">
                            <h2 className="text-sm" >474 ₽</h2>
                        </div>
                        <div className="row-start-2 w-80 text-sm col-start-2 text-app-graylight">
                            <p>Цвет: черный</p>
                        </div>
                        <div className="row-start-2 w-80 text-sm col-start-4 text-app-graylight">
                            <p>длина: 20м</p>
                        </div>
                    </div>
                    <div className="flex justify-center pb-[34px]">
                    <button className="button-m2  text-center bg-app-blue text-white square rounded-0 mt-[50px] h-[50px] w-[550px]">ОФОРМИТЬ ЗАКАЗ</button>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default PopUpPrice