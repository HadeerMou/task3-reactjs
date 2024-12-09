import { Component } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaCartShopping } from "react-icons/fa6";
import TopButton from "./TopButton";
import { NavLink } from "react-bootstrap";
import Button from "react-bootstrap/Button";

export default class Header extends Component {
  render() {
    return (
      <>
        <Navbar expand="lg" className="text-bg-danger">
          <Container>
            <Navbar.Brand href="#home">Shopping Cart</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <NavLink className="ms-auto d-flex gap-3">
                <Button variant="light">Lather Jacket</Button>
                <Button variant="light">Pink Shirt</Button>
                <Button variant="light">Wide leg Jeans</Button>
                <Button variant="light">Black Blouse</Button>
                <Button variant="light">Satin Skirt</Button>
              </NavLink>

              <Nav className="ms-auto">
                <Nav.Link className="d-flex gap-2">
                  <FaCartShopping className="text-black mt-1" />
                  <span>0</span>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <TopButton reset={this.props.reset} empty={this.props.empty} />
      </>
    );
  }
}
