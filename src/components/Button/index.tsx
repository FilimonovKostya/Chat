import React, {ReactElement} from 'react';
import styles from './styles.module.scss'

type ButtonProps = {
    icon: ReactElement<SVGSVGElement>
    text: string
}

const Button = ({icon, text}: ButtonProps) => {
    return (
        <div className={styles.container}>
            {icon}
            <span>{text}</span>
        </div>
    );
};

export default Button;
