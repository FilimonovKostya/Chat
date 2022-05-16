import React from 'react';
import styles from "./styles.module.scss";
import {ReactComponent as Logo} from "../../assets/icons/logo.svg";

const Heading = () => {
    return (
        <div className={styles.container}>
            <Logo/>
            <h1>TalkBox</h1>
        </div>
    );
};

export default Heading;
