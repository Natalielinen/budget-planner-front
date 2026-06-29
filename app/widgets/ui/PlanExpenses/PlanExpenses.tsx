import { Button, Card } from "@/app/shared";
import styles from "./PlanExpenses.module.scss";
import { PlusIcon } from "lucide-react";
import { formatSum } from "@/app/shared/utils/formatSum";
import usePlanExpensesStore from "@/app/stores/planExpenses.store";

const PlanExpenses = () => {
    const { planExpenses } = usePlanExpensesStore();

    return (
        <Card className={styles.planExpenses}>
            <div className={styles.header}>
                <div>📤 Обязательные расходы</div>
                <Button text="Добавить" endAdornment={<PlusIcon />} />
            </div>

            <div className={styles.expensesList}>
                {planExpenses.length > 0 &&
                    planExpenses.map((exp) => (
                        <div className={styles.expenseItem} key={exp.id}>
                            <div className={styles.expenseInfo}>
                                <div className={styles.expenseTitle}>{exp.title}</div>
                                <div className={styles.expensePart}>
                                    {parseFloat(exp.fixedAmount) > 0
                                        ? "Сумма"
                                        : "Процент от дохода"}
                                    :{" "}
                                    {parseFloat(exp.fixedAmount) > 0
                                        ? formatSum(exp.fixedAmount)
                                        : `${exp.percent}%`}
                                </div>
                            </div>

                            <div className={styles.expenseSum}>
                                <div className={styles.expenseSumValue}>
                                    - {formatSum(exp.sum)}
                                </div>
                                <Button text="✕" variant="danger" />
                            </div>

                        </div>
                    ))}
            </div>
        </Card>
    );
};

export default PlanExpenses;
