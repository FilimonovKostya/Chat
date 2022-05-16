import React from 'react';
import styles from './styles.module.scss'
import {ReactComponent as Logo} from "./../../assets/icons/logo.svg";

const SignIn = () => {
    return (
        <div className={styles.test}>
           <Logo/>
           <h1>TalkBox</h1>
        </div>
    );
};

export default SignIn;
