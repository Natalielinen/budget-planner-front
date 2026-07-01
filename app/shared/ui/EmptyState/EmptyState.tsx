import { FC } from "react";
import styles from "./EmptyState.module.scss";

interface EmptyStateProps {
    title: string;
}
const EmptyState: FC<EmptyStateProps> = ({ title }) => {
    return (
        <div className={styles.emptyState}>
            <div className={styles.emptyStateIcon}>📭</div>
            <div> Нет {title}. Добавьте первый!</div>
        </div>
    );
}

export default EmptyState;