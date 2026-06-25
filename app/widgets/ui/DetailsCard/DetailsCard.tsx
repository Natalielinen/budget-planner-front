import { FC } from "react";
import { PlusIcon } from "lucide-react";
import { Button, Card, TransactionItem } from "@/app/shared";
import { IncomesType } from "@/app/types/incomes";

import styles from "./DetailsCard.module.scss";

interface DetailsCardProps {
    title: string;
    icon: React.ReactNode;
    transactions: IncomesType[];
    isIncome?: boolean;
}

const DetailsCard: FC<DetailsCardProps> = ({ title, icon, transactions, isIncome = false }) => {
    return (
        <Card className={styles.detailsCard}>
            <div className={styles.cardHeader}>
                <div>
                    {icon} {title}
                </div>
                <Button text="Добавить" endAdornment={<PlusIcon />} />
            </div>

            <div className={styles.cardBody}>
                {transactions && transactions.length > 0 ? (
                    transactions.map((t) => <TransactionItem key={t.id} isIncome={isIncome} transaction={t} />)
                ) : (
                    <div>Нет доходов</div>
                )}
            </div>
        </Card>
    );
};

export default DetailsCard;
