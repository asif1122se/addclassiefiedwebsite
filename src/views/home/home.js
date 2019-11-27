import React from 'react';
import TopBar from '../topBar/topBar';
import Menu from '../mainHeader/menu/menu';
import classes from './home.module.css'
import Divider from '@material-ui/core/Divider';
import Navigationbar from "../navigationBar/navigationbar";
import Slider from "../slider/slider";

const Home =()=>{

    return (

        <div>
            <div className={classes.menu}>
                <Menu  />
            </div>
            <TopBar />
            <Divider/>
            <Navigationbar/>
            <Slider/>
        </div>



    );

}
export default Home;