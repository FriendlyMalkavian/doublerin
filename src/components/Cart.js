import React from "react";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import green from "./assets/images/bg.png"
import '../custom.scss'
import Order from "./Order";

function Cart() {
    const [show, setShow] = useState(false);

    return (
        <>
            <Button className="cartImg h-6 w-6 bg-transparent rounded-none outline-0 border-0 ml-5" onClick={() => setShow(true)}>
                
            </Button>

            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="customModal"
                size="lg"
            >
                <Modal.Body className="border-0 modalText ml-[50px] mr-[50px]">
                    <h1 className="text-center text-2xl mb-[50px] font-bold mt-[50px]">ВАШ ЗАКАЗ</h1>
                    <div className=" grid grid-rows-9 grid-cols-6 h-[140px] justify-left pb-[20px]">
                        <div className="col-start-1 col-span-2 row-start-1 row-span-9">
                            <img
                                src={green}
                                alt="green"
                                className="h-[120px] w-[120px]"
                            >
                            </img>
                        </div>
                        <div className="row-start-1 col-start-2 col-span-2 ml-[16px]">
                            <h2 className="text-sm" >Дублерин клеевой для ткани <br/>150х100 см, 75 г/кв2</h2>
                        </div>

                        <div className="row-start-4 w-80 text-sm col-start-2 ml-[16px] text-app-graylight">
                            <p>цвет: черный</p>
                        </div>
                        <div className="row-start-4 w-80 text-sm col-start-3 text-app-graylight">
                            <p>длина: 20м</p>
                        </div>
                        <div className="row-start-6 col-start-2 ml-[16px]">
                            <h2 className="text-sm line-through text-app-graylight" >520 ₽</h2>
                        </div>
                        <div className="row-start-7 col-start-2 ml-[16px]">
                            <h2 className="text-sm font-bold" >474 ₽</h2>
                        </div>
                        <div className="row-start-8 col-start-2 ml-[16px] mt-2">
                            <h2 className="text-sm font-bold text-app-blue" >скидка 150₽</h2>
                        </div>
                        <div className="row-start-4 col-start-5 flex justify-end">
                            <button className="button-m2  text-center bg-app-blue text-white square rounded- h-6 w-6">—</button>
                        </div>
                        <div className="row-start-4 col-start-6 flex justify-start">
                            <p className="ml-[17px] mr-[17px]">1</p>
                            <button className="button-m2  text-center bg-app-blue text-white square rounded- h-6 w-6">+</button>
                        </div>
                        <div className="row-start-4 col-start-6 flex justify-end">
                        <button className="trash bg-transparent rounded-none outline-0 border-0 h-[18px] w-[14px] mt-[3px] ml-[22px]"></button>
                        </div>
                    </div>
                    <div className=" grid grid-rows-9 grid-cols-6 h-[140px] justify-left pb-[20px]">
                        <div className="col-start-1 col-span-2 row-start-1 row-span-9">
                            <img
                                src={green}
                                alt="green"
                                className="h-[120px] w-[120px]"
                            >
                            </img>
                        </div>
                        <div className="row-start-1 col-start-2 col-span-2 ml-[16px]">
                            <h2 className="text-sm" >Дублерин клеевой для ткани <br/>150х100 см, 75 г/кв2</h2>
                        </div>

                        <div className="row-start-4 w-80 text-sm col-start-2 ml-[16px] text-app-graylight">
                            <p>цвет: черный</p>
                        </div>
                        <div className="row-start-4 w-80 text-sm col-start-3 text-app-graylight">
                            <p>длина: 20м</p>
                        </div>
                        <div className="row-start-6 col-start-2 ml-[16px]">
                            <h2 className="text-sm line-through text-app-graylight" >520 ₽</h2>
                        </div>
                        <div className="row-start-7 col-start-2 ml-[16px]">
                            <h2 className="text-sm font-bold" >474 ₽</h2>
                        </div>
                        <div className="row-start-8 col-start-2 ml-[16px] mt-2">
                            <h2 className="text-sm font-bold text-app-blue" >скидка 150₽</h2>
                        </div>
                        <div className="row-start-4 col-start-5 flex justify-end">
                            <button className="button-m2  text-center bg-app-blue text-white square rounded- h-6 w-6">—</button>
                        </div>
                        <div className="row-start-4 col-start-6 flex justify-start">
                            <p className="ml-[17px] mr-[17px]">1</p>
                            <button className="button-m2  text-center bg-app-blue text-white square rounded- h-6 w-6">+</button>
                        </div>
                        <div className="row-start-4 col-start-6 flex justify-end">
                        <button className="trash bg-transparent rounded-none outline-0 border-0 h-[18px] w-[14px] mt-[3px] ml-[22px]"></button>
                        </div>
                    </div>
                    <div className="border-t border-app-black text-end">
                        <h3 className="font-normal text-sm leading-[16.41px] mt-[20px] mb-0">сумма: 974 ₽</h3>
                        <h2 className="font-bold text-sm leading-[16.41px] mt-[5px] text-app-blue">скидка: 300 ₽</h2>
                        <div className="flex justify-end">
                            <h1 className="font-normal text-2xl leading-[28.13px]">ИТОГО: </h1>
                            <h1 className="font-bold text-2xl leading-[28.13px] ml-[6px]">874 ₽</h1>
                        </div>
                    </div>
                    <Order />
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Cart