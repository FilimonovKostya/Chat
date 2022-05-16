import React from 'react';
import styles from './styles.module.scss'
import {ReactComponent as Google} from "./../../assets/icons/google.svg";

const Button = () => {
    return (
        <div className={styles.container}>
            <Google/>
            <span>Sign in with Google</span>
        </div>
    );
};

export default Button;
