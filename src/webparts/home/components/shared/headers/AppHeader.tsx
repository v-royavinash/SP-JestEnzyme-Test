import React from "react";
import Navbar from "react-bootstrap/Navbar";
import styles from "./Header.module.scss";

const AppHeader = () => {
    const mslogo: string = require("../../../assets/images/mslogo.png");

    return (
        <Navbar className={styles.navbg}>
            <Navbar.Brand
                href="#/"
                className={styles.bgDecorator}
            >
                <span className={styles.headerPosition}>
                    <span className={styles.appHeaderLabel}>Test</span>
                </span>
            </Navbar.Brand>
        </Navbar>
    );
};

export default AppHeader;
