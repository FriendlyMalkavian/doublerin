import React from "react";
import Form from 'react-bootstrap/Form';

function FormOpt() {
    return (
        <div className="d-flex justify-content-center formOpt">
            <div className=" d-flex flex-column contactForm">
                <div>
                    <h1 className="contactForm-h1">ОФОРМЛЕНИЕ<br /> ОПТОВОГО ЗАКАЗА </h1>
                    <h2 className="contactForm-h2">СО СКИДКОЙ</h2>
                </div>
                <div>
                    <Form className="order">
                        <Form.Group className="MarginGroup ">
                            <Form.Label>Ваше имя*</Form.Label>
                            <Form.Control className="MarginGroup-input square rounded-0" type="email" placeholder="Иван Иванов" />
                        </Form.Group>

                        <Form.Group className="MarginGroup" >
                            <Form.Label>Ваш телефон*</Form.Label>
                            <Form.Control className="MarginGroup-input square rounded-0" type="text" placeholder="+7 (899) 999 99 99" />
                        </Form.Group>


                        <Form.Group className="MarginGroup">
                            <Form.Label>Комментарий</Form.Label>
                            <Form.Control className="MarginGroup-text square rounded-0" as="textarea" placeholder="Оставьте свой комментарий" />
                        </Form.Group>
                        <Form.Group className="MarginGroup">
                            <Form.Check className="checkboxForm" type="checkbox" label="Согласен на обработку персональных данных" />
                        </Form.Group>
                    </Form>
                </div>
                <div>
                    <button className="chooseButton buttonm-3">ОПТОВЫЙ ПРАЙС</button>
                </div>
            </div>
        </div>
    )
}
export default FormOpt