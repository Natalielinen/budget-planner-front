'use client';

import { FC, useState } from "react";
import { format } from "date-fns";
import { de, ru } from "date-fns/locale";
import Button from "../Button/Button";
import { IncomesType } from "@/app/types/incomes";
import { formatSum } from "../../utils/formatSum";
import IconButton from "../IconButton/IconButton";
import { ChevronDown, ChevronUp } from "lucide-react";

import style from "./TransactionItem.module.scss";

interface TransactionItemProps {
    isIncome: boolean;
    transaction: IncomesType;
    details?: React.ReactNode;
}

const TransactionItem: FC<TransactionItemProps> = ({
    transaction,
    isIncome,
    details
}) => {

    const [showDetails, setShowDetails] = useState(false);

    const handleShowDetails = () => {
        setShowDetails(!showDetails);
    };

    return (
        <div className={style.transactionItem}>
            <div className={style.transactionItemMain}>
                <div className={style.transactionItemLeft}>
                    {details && <IconButton variant="ghost" size="sm" onClick={handleShowDetails}>{showDetails ? <ChevronUp color="#171717" /> : <ChevronDown color="#171717" />} </IconButton>}

                    <div className={style.transactionInfo}>
                        <div className={style.transactionName}>{transaction?.source}</div>
                        <div className={style.transactionDate}>
                            {transaction?.date
                                ? format(transaction?.date, "PP", { locale: ru })
                                : ""}
                        </div>
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
            {
                details && showDetails && <div className={style.transactionDetails}>
                    {details}
                </div>
            }

        </div>
    );
};

export default TransactionItem;
