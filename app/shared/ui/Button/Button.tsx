import { FC } from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
    text: string;
    endAdornment?: React.ReactNode;
    variant?: "primary" | "danger";
}
const Button: FC<ButtonProps> = ({ text, endAdornment, variant = "primary" }) => {
    return (
        <button className={`${styles.button} ${styles[variant]}`}>{text}{endAdornment}</button>
    )
}

export default Button;