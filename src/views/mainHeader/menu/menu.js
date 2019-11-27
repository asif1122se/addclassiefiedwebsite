import React from 'react';
import Nav from 'react-bootstrap/Nav';
import classes from './menu.module.css';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
    root: {
        width: 'fit-content',
        border: `1px solid ${theme.palette.divider}`,
        borderRadius: theme.shape.borderRadius,
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.secondary,

        '& hr': {
            color:'#000',
            margin: theme.spacing(0, 0.5),
        },
    },
}));
const Header =()=>{
    let className = clsx(classes.newnav, "justify-content-end");
    const classe = useStyles();


    return (
        <Container>

        <Nav className={className} activeKey="/home">
            <Nav.Item >
                <Nav.Link href="/home" className={classes.link}>switch language</Nav.Link>
            </Nav.Item>
            <Divider orientation="vertical" />
            <Nav.Item>
                <Nav.Link  href="/home" className={classes.link}>Help</Nav.Link>
            </Nav.Item>

        </Nav>
        </Container>


    );
}
export default Header;