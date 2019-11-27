import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Logo from '../mainHeader/logo/logo.png';
import classes from './topBar.module.css';
import Container from '@material-ui/core/Container';


export default function TopBar() {


    return (
        <Container>
            <Navbar bg="" expand="lg">
                <Navbar.Brand className={classes.navbarbrnad} href="#home"><img src={Logo} className={classes.logo}/></Navbar.Brand>
                    <Nav className="mr-auto" >
                        <NavDropdown className={classes.navitem} title="All Cities" >
                            <NavDropdown.Item href="#action/3.1">UAE</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.2"> Dubai</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.3">Al Fajar</NavDropdown.Item>
                            <NavDropdown.Divider />
                        </NavDropdown>
                        <Nav.Link className={classes.navitem} href="#home">My chat</Nav.Link>
                        <Nav.Link className={classes.navitem} href="#home">Login or SignUp</Nav.Link>

                        <Button className={classes.navitem} size="lg" variant="danger">Place Your Add</Button>
                    </Nav>



            </Navbar>

        </Container>
    );
}