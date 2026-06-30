import { FC } from "react";
import styles from "./Button.module.scss";
import { ButtonSize, ButtonVariant } from "@/app/types/types";

interface ButtonProps {
    text: string;
    endAdornment?: React.ReactNode;
    variant?: ButtonVariant;
    size?: ButtonSize;
}
const Button: FC<ButtonProps> = ({ text, endAdornment, variant = "primary", size = "md" }) => {
    return (
        <button className={`${styles.button} ${variant} ${size}`}>{text}{endAdornment}</button>
    )
}

export default Button;