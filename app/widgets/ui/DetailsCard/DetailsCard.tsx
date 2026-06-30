'use client';

import { FC } from "react";
import { PlusIcon } from "lucide-react";
import { Button, Card, TransactionItem } from "@/app/shared";
import { IncomesType } from "@/app/types/incomes";

import styles from "./DetailsCard.module.scss";
import usePlanExpensesStore from "@/app/stores/planExpenses.store";
import useIncomesStore from "@/app/stores/incomes.store";
import { formatSum } from "@/app/shared/utils/formatSum";

interface DetailsCardProps {
    title: string;
    icon: React.ReactNode;
    transactions: IncomesType[];
    isIncome?: boolean;
}



const DetailsCard: FC<DetailsCardProps> = ({ title, icon, transactions, isIncome = false }) => {

    const { planExpenses } = usePlanExpensesStore();
    const { incomes } = useIncomesStore();

    const incomesLength = incomes.length;

    const transactionDetails = (amount: number) => {
        return planExpenses.map((pe) => (
            <div key={pe.id}>
                <div className={styles.expenseTitle}>{pe.title}</div>
                <div className={styles.expensePart}>{parseFloat(pe.fixedAmount) > 0 ? `Сумма: ${pe.fixedAmount}` : `Процент от дохода: ${pe.percent}%`}</div>
                <div>Итоговая сумма: {parseFloat(pe.fixedAmount) > 0 ? formatSum(parseFloat(pe.fixedAmount) / incomesLength) : formatSum(amount * (pe.percent / 100))}</div>
            </div>));
    }


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
                    transactions.map((t) => <TransactionItem key={t.id} isIncome={isIncome} transaction={t} details={transactionDetails(parseFloat(t.amount))} />)
                ) : (
                    <div>Нет доходов</div>
                )}
            </div>
        </Card>
    );
};

export default DetailsCard;
