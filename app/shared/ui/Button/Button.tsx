import { FC } from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
    text: string;
    endAdornment?: React.ReactNode
}
const Button: FC<ButtonProps> = ({ text, endAdornment }) => {
    return (
        <button className={styles.button}>{text}{endAdornment}</button>
    )
}

export default Button;