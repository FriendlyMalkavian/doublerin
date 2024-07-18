import React from "react";
import { Nav, Container, NavItem } from "react-bootstrap";
import logo from './TECOPACK.svg'
import cart from './tradecart.svg'
import phone from './phone.svg'
import Cart from "./Cart";

function Header() {
    return (
        <>
            <Container className="header-top">


                <Nav className="justify-content-around">
                    <NavItem>
                        <img
                            src={logo}
                            height="35"
                            width="133"
                            className="d-block logo-p"
                            alt="logo"
                        />
                    </NavItem>
                    <NavItem className="align-items-center">
                        <a className="header-text" href="/"> Каталог</a>
                    </NavItem>
                    <NavItem className="align-items-center">
                        <a className="header-text" href="/"> Оптовые продажи</a>
                    </NavItem>
                    <NavItem className="align-items-center">
                        <a className="header-text" href="/"> Контакты</a>
                    </NavItem>
                    <NavItem className="align-items-center ">
                        <a className="header-phone align-items-center" href="/"> +7 905 785 44 55</a>
                        <img
                            src={phone}
                            height="24"
                            width="24"
                            className="d-block img-mar"
                            alt="logo"
                        />
                        <Cart />
                    </NavItem>
                </Nav>
            </Container>
        </>
    )
}
export default Header
