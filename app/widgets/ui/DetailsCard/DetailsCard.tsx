import { Button, Card } from "@/app/shared";
import { FC } from "react";
import styles from "./DetailsCard.module.scss";
import { PlusIcon } from "lucide-react";

interface DetailsCardProps {
    title: string;
    icon: React.ReactNode;
}

const DetailsCard: FC<DetailsCardProps> = ({ title, icon }) => {
    return (
        <Card className={styles.detailsCard}>
            <div className={styles.cardHeader}>
                <div>{icon} {title}</div>
                <Button text="Добавить" endAdornment={<PlusIcon />} />
            </div>

        </Card>
    )
}

export default DetailsCard;