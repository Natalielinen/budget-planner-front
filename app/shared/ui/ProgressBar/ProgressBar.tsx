import { FC } from "react";
import styles from "./ProgressBar.module.scss";

interface ProgressBarProps {
    progress: number;
}

const ProgressBar: FC<ProgressBarProps> = ({ progress }) => {
    return <div className={styles.progressContainer}>
        <div className={styles.progressBar}>
            <div className={styles.progressFill} style={{ width: `${progress}%` }}></div>
        </div>
        <div className={styles.progressLabels}>
            <span>0%</span>
            <span>{progress}% расходов</span>
        </div>
    </div>

}

export default ProgressBar;