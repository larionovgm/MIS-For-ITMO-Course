import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from "react-bootstrap/Navbar";
import FormControl from 'react-bootstrap/FormControl';

function NavBar() {
  return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand href="#home">Отделение кардиологии и реанимации</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">График дежурств и отсутсвий</Nav.Link>
        <Nav.Link href="#features">Сотрудники</Nav.Link>
      </Nav>
        <Button variant="outline-primary">Выход</Button>
    </Navbar>
  );
}

export default NavBar;
