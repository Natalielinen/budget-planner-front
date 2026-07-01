"use client";

import useIncomesStore from "@/app/stores/incomes.store";
import GeneralInfo from "../GeneralInfo/GeneralInfo";
import DetailsCard from "../DetailsCard/DetailsCard";
import { formatSum } from "@/app/shared/utils/formatSum";

import styles from "./PlanDetails.module.scss";
import PlanExpenses from "../PlanExpenses/PlanExpenses";
import usePlansStore from "@/app/stores/plans.store";
import usePlanExpensesStore from "@/app/stores/planExpenses.store";

const PlanDetails = () => {
    const { incomesTotal, incomes } = useIncomesStore();
    const { plans, activePlan } = usePlansStore();
    const { planExpenses, totalPlanExpenses } = usePlanExpensesStore();

    const incomesIcon = <div className={styles.incomeIcon}>📈</div>;
    const expensesIcon = <div className={styles.expenseIcon}>📉</div>;
    const balanceIcon = <div className={styles.balanceIcon}>💵</div>;

    const balance = plans.find((plan) => plan.id === activePlan)?.balance || 0;

    return (
        <div className={styles.planDetails}>
            <div className={styles.generalInfo}>
                <GeneralInfo
                    icon={incomesIcon}
                    title="Всего доходов"
                    value={incomesTotal === 0 ? "₽0" : formatSum(incomesTotal)}
                    valueColor="#2e7d32"
                />
                <GeneralInfo
                    icon={expensesIcon}
                    title="Обязательные расходы"
                    value={totalPlanExpenses === 0 ? "₽0" : formatSum(totalPlanExpenses)}
                    valueColor="#c62828"
                />
                <GeneralInfo
                    icon={balanceIcon}
                    title="Остаток"
                    value={formatSum(balance)}
                    valueColor="#1565c0"
                    progress={Number(((totalPlanExpenses / incomesTotal) * 100).toFixed(2)) || 0}
                />
            </div>

            <PlanExpenses />

            {
                planExpenses.length > 0 && <div className={styles.detailsSection}>

                    <DetailsCard title="Доходы" icon="📥" transactions={incomes} isIncome />
                    <DetailsCard title="Расходы" icon="📤" transactions={[]} />
                </div>
            }

        </div>
    );
};

export default PlanDetails;
