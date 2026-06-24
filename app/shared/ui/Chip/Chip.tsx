import { FC } from "react";
import styles from "./Chip.module.scss";

interface ChipProps {
    text: string;
    onClick?: () => void;
    isActive?: boolean;
    startAdornment?: React.ReactNode;
}

const Chip: FC<ChipProps> = ({ text, onClick, isActive, startAdornment }) => {
    return (
        <div onClick={onClick} role="button" className={`${styles.chip} ${isActive && styles.active}`}>
            {startAdornment}
            {text}
        </div>
    )
}

export default Chip;