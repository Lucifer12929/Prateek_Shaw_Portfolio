import React from "react";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-scroll";
import PrateekShaw from "../../assets/images/name.png";

const Logo = ({ setHomeIsActive, ...rest }) => {
    const classes = useStyles();
    return (
        <Link
            spy
            smooth
            duration={500}
            offset={-70}
            to="home"
            onSetActive={() => setHomeIsActive(true)}
            onSetInactive={() => setHomeIsActive(false)}
            className={classes.root}
        >
            <img src={PrateekShaw} width="70" height="60"/>
        </Link>
    );
};

const useStyles = makeStyles((theme) => ({
    root: {
        cursor: "pointer",
    },
}));

export default Logo;
