import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import classes from './navigationbar.module.css';
import Container from '@material-ui/core/Container';
import clsx from 'clsx';





export default function TopBar() {
    let className = clsx(classes.newnav, "mr-auto");


    return (
        <Container>
            <Navbar bg="" expand="lg" className={classes.navitem}>
                <Nav className={className} >
                    <NavDropdown className={classes.navitem} title="Motors" >
                        <NavDropdown.Item href="#action/3.1">UAE</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.2"> Dubai</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.3">Al Fajar</NavDropdown.Item>
                        <NavDropdown.Divider />
                    </NavDropdown>
                    <NavDropdown className={classes.navitem} title="Property for sale " >
                        <NavDropdown.Item href="#action/3.1">UAE</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.2"> Dubai</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.3">Al Fajar</NavDropdown.Item>
                        <NavDropdown.Divider />
                    </NavDropdown>
                    <NavDropdown className={classes.navitem} title="Property For Rent" >
                        <NavDropdown.Item href="#action/3.1">UAE</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.2"> Dubai</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.3">Al Fajar</NavDropdown.Item>
                        <NavDropdown.Divider />
                    </NavDropdown>
                    <NavDropdown className={classes.navitem} title="Classifields" >
                        <NavDropdown.Item href="#action/3.1">UAE</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.2"> Dubai</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.3">Al Fajar</NavDropdown.Item>
                        <NavDropdown.Divider />
                    </NavDropdown>
                    <NavDropdown className={classes.navitem} title="Mobile phones" >
                        <NavDropdown.Item href="#action/3.1">UAE</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.2"> Dubai</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.3">Al Fajar</NavDropdown.Item>
                        <NavDropdown.Divider />
                    </NavDropdown>
                    <NavDropdown className={classes.navitem} title="Business & industrial" >
                        <NavDropdown.Item href="#action/3.1">UAE</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.2"> Dubai</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.3">Al Fajar</NavDropdown.Item>
                        <NavDropdown.Divider />
                    </NavDropdown>
                    <NavDropdown className={classes.navitem} title="Jobs" >
                        <NavDropdown.Item href="#action/3.1">UAE</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.2"> Dubai</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.3">Al Fajar</NavDropdown.Item>
                        <NavDropdown.Divider />
                    </NavDropdown>
                    <NavDropdown className={classes.navitem} title="Community" >
                        <NavDropdown.Item href="#action/3.1">UAE</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.2"> Dubai</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.3">Al Fajar</NavDropdown.Item>
                        <NavDropdown.Divider />
                    </NavDropdown>

                </Nav>



            </Navbar>

        </Container>
    );
}