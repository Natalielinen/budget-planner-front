import { FC } from "react";
import styles from "./Card.module.scss";

interface CardProps {
    children: React.ReactNode;
    className?: string;
}

const Card: FC<CardProps> = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return <div className={`${styles.card} ${className}`}>{children}</div>;
}

export default Card;