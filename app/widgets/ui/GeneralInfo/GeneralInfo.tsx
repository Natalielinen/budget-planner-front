import { Card, ProgressBar } from "@/app/shared";
import { FC } from "react";
import styles from "./GeneralInfo.module.scss";

interface GeneralInfoProps {
    icon: React.ReactNode;
    title: string;
    value: string;
    valueColor?: string;
    progress?: number;
}

const GeneralInfo: FC<GeneralInfoProps> = ({ icon, title, value, valueColor = '#000', progress }) => {
    return <Card className={styles.generalCard}>
        <div className={styles.cardContentTop}>
            <div className={styles.cardIcon}>{icon}</div>
            <div className={styles.cardInfo}>
                <div className={styles.cardTitle}>{title}</div>
                <div className={styles.cardValue} style={{ color: valueColor }}>{value}</div>
            </div>
        </div>

        {!!progress && <ProgressBar progress={progress} />}
    </Card>;
}

export default GeneralInfo;