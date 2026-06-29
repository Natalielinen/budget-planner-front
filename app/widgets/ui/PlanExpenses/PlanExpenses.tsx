import { Button, Card } from "@/app/shared";
import styles from "./PlanExpenses.module.scss";
import { PlusIcon } from "lucide-react";

const PlanExpenses = () => {
    return <Card className={styles.planExpenses}>
        <div className={styles.header}>
            <div>📤 Обязательные расходы</div>
            <Button text="Добавить" endAdornment={<PlusIcon />} />
        </div>

        <div className={styles.expensesList}>
            <div className={styles.expenseItem}>
                <div>Квартплата + продукты</div>
                <div>Процент от дохода: 40 %</div>
                <div>Сумма: 40 000 ₽</div>
            </div>

        </div>

    </Card>;
}

export default PlanExpenses;