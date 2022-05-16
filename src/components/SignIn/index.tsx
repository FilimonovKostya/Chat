import React from 'react';
import Button from "../Button";
import Heading from "../Heading";
import styles from './styles.module.scss'
import {ReactComponent as Google} from "./../../assets/icons/google.svg";
import {ReactComponent as Facebook} from "./../../assets/icons/facebook.svg";


const SignIn = () => {
    return (
        <div className={styles.wrapper}>
            <Heading/>
            <Button icon={<Google/>} text={'Sign in with Google'} />
            <Button icon={<Facebook/>} text={'Sign in with Facebook'}/>
        </div>
    )
        ;
};

export default SignIn;
