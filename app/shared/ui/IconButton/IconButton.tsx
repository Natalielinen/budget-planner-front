import { FC } from "react";
import { ButtonSize, ButtonVariant } from "@/app/types/types";

import styles from "./IconButton.module.scss";

interface IconButtonProps {
    children: React.ReactNode,
    onClick: () => void;
    variant?: ButtonVariant;
    size?: ButtonSize;
}
const IconButton: FC<IconButtonProps> = ({ children, variant = "primary", size = "md", onClick }) => {
    return (
        <button className={`${styles.button} ${variant} ${size}`} onClick={onClick}>{children}</button>
    )
}

export default IconButton;