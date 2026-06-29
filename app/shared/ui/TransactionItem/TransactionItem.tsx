import { FC } from "react";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import Button from "../Button/Button";
import { IncomesType } from "@/app/types/incomes";

import style from "./TransactionItem.module.scss";
import { formatSum } from "../../utils/formatSum";

interface TransactionItemProps {
    isIncome: boolean;
    transaction: IncomesType;
}

const TransactionItem: FC<TransactionItemProps> = ({
    transaction,
    isIncome,
}) => {
    return (
        <div className={style.transactionItem}>
            <div className={style.transactionInfo}>
                <div className={style.transactionName}>{transaction?.source}</div>
                <div className={style.transactionDate}>
                    {transaction?.date
                        ? format(transaction?.date, "PP", { locale: ru })
                        : ""}
                </div>
            </div>
            <div className={style.transactionSum}>
                <div
                    className={`${style.transactionSumValue} ${isIncome ? style.income : style.expense}`}
                >
                    {isIncome ? "+ " : "- "}{formatSum(transaction?.amount)}
                </div>
                <Button text="✕" variant="danger" />
            </div>
        </div>
    );
};

export default TransactionItem;
