import React from 'react';
import classe from './slider.module.css';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

const useStyles = makeStyles({
    root: {
        width: 500,
    },
});

const Slider = () =>{
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    return(
        <div className={classe.bg}>
            <h1>The best place to buy your house, sell your car
                or find a job in Dubai.</h1>
            <BottomNavigation
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                showLabels
                className={classes.root}
            >
                <BottomNavigationAction label="Recents"  />
                <BottomNavigationAction label="Favorites" />
                <BottomNavigationAction label="Nearby" />
            </BottomNavigation>
        </div>
    );
}
export default Slider;