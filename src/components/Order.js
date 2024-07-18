import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import '../custom.scss'

export default function Order() {
    const [show, setShow] = useState(false);

    return (
        <><div className="flex justify-center pb-[34px]">
            <Button className="button-m2  text-center bg-app-blue text-white square rounded-0 mt-[50px] h-[50px] w-[550px]" onClick={() => setShow(true)}>ОФОРМИТЬ ЗАКАЗ</Button>
        </div>
            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="customModal"
                size="lg"
            >
                <Modal.Body className="border-0 modalText ml-[50px] mr-[50px]">
                    <h1 className="text-center text-2xl mb-[50px] font-bold mt-[50px]">ОФОРМЛЕНИЕ ЗАКАЗА</h1>
                    <div className="grid grid-rows-2 grid-cols-2 pb-[10px] mt-5">
                        <div className="row-start-1 col-start-1 flex justify-start">
                            <h1 className="font-normal text-sm leading-[16.41px]">ТОВАРЫ (2)</h1>
                        </div>
                        <div className="row-start-1 col-start-2 flex justify-end">
                            <h2 className="font-medium text-sm leading-[16.41px]">974 ₽</h2>
                        </div>
                        <div className="row-start-2 col-start-1 flex justify-start">
                            <h1 className="font-bold text-app-blue text-sm leading-[16.41px]">СКИДКА</h1>
                        </div>
                        <div className="row-start-2 col-start-2 flex justify-end">
                            <h2 className="font-bold text-app-blue text-sm leading-[16.41px]">250 ₽</h2>
                        </div>
                    </div>
                    <div className="border-b border-app-black"></div>
                    <div className="grid grid-rows-1 grid-cols-2 pb-[10px] mt-[10px]">
                        <div className="row-start-1 col-start-1 flex justify-start">
                            <h1 className="font-bold text-sm leading-[16.41px]">ИТОГО:</h1>
                        </div>
                        <div className="row-start-1 col-start-2 flex justify-end">
                            <h2 className="font-bold text-2xl leading-[28.13px]">874 ₽</h2>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-left text-[28px] leading-[28.13px] font-normal mb-[20px]  mt-[50px]">КОНТАКТНЫЕ ДАННЫЕ:</h1>
                        <Form className="order">
                            <Form.Group className="OrderGroup ">
                                <Form.Label>Ваше имя*</Form.Label>
                                <Form.Control className="MarginGroup-input square rounded-0" type="email" placeholder="Иван Иванов" />
                            </Form.Group>

                            <Form.Group className="OrderGroup" >
                                <Form.Label>Ваш телефон*</Form.Label>
                                <Form.Control className="MarginGroup-input square rounded-0" type="text" placeholder="+7 (899) 999 99 99" />
                            </Form.Group>

                            <h1 className="text-left text-[28px] leading-[28.13px] font-normal mb-[20px]  mt-[50px]">СПОСОБ ПОЛУЧЕНИЯ:</h1>

                            <Form.Group className="OrderGroup">
                                <div className="flex align-middle">
                                    <Form.Check className="checkboxForm" type="radio" />
                                    <p className="text-sm font-medium ml-[5px]">САМОВЫВОЗ</p>
                                    <p className="text-sm font-medium ml-[5px] text-app-graylight"> (Москва, Багратионовская 165)</p>
                                </div>
                                <div className="flex align-middle">
                                    <Form.Check className="checkboxForm" type="radio" />
                                    <p className="text-sm font-medium ml-[5px]">ДОСТАВКА</p>
                                </div>
                            </Form.Group>
                            <Form.Group className="OrderGroup ">
                                <Form.Label>Ваш город*</Form.Label>
                                <Form.Control className="MarginGroup-input square rounded-0" type="email" placeholder="Москва" />
                            </Form.Group>

                            <Form.Group className="OrderGroup" >
                                <Form.Label>Ваш улица*</Form.Label>
                                <Form.Control className="MarginGroup-input square rounded-0" type="text" placeholder="ул. Слободская" />
                            </Form.Group>
                            <div className="grid grid-cols-2 gap-2">
                                <div>
                                    <Form.Group className="OrderGroup col-start-1 col-end-1">
                                        <Form.Label>Ваш дома*</Form.Label>
                                        <Form.Control className="h-[50px] input square rounded-0" type="email" placeholder="145" />
                                    </Form.Group>
                                </div>
                                <div>
                                    <Form.Group className="OrderGroup col-start-2">
                                        <Form.Label>Ваша квартира*</Form.Label>
                                        <Form.Control className="h-[50px] input square rounded-0" type="email" placeholder="58" />
                                    </Form.Group>
                                </div>
                            </div>

                            <h1 className="text-left text-[28px] leading-[28.13px] font-normal mb-[20px]  mt-[50px]">СПОСОБ ОПЛАТЫ:</h1>

                            <Form.Group className="OrderGroup">
                                <div className="flex align-middle">
                                    <Form.Check className="checkboxForm" type="radio" />
                                    <p className="text-sm font-medium ml-[5px]">НАЛИЧНЫЙ РАСЧЁТ</p>
                                </div>
                                <div className="flex align-middle">
                                    <Form.Check className="checkboxForm" type="radio" />
                                    <p className="text-sm font-medium ml-[5px]">БЕЗНАЛИЧНЫЙ РАСЧЁТ</p>
                                </div>
                            </Form.Group>
                            <Form.Group className="OrderGroup">
                                <Form.Check className="checkboxForm" type="checkbox" label="Согласен на обработку персональных данных" />
                            </Form.Group>
                        </Form>
                    </div>
                    <div className="flex justify-center pb-[34px]">
                        <button className="button-m2  text-center bg-app-blue text-white square rounded-0 mt-[10px] h-[50px] w-full">ЗАКАЗАТЬ</button>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

