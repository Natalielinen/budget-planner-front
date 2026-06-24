'use client';

import useIncomesStore from "@/app/stores/incomes.store";
import GeneralInfo from "../GeneralInfo/GeneralInfo";
import styles from "./PlanDetails.module.scss";
import { formatSum } from "@/app/shared/utils/formatSum";
import DetailsCard from "../DetailsCard/DetailsCard";

const PlanDetails = () => {

    const { incomesTotal } = useIncomesStore();

    const incomesIcon = <div className={styles.incomeIcon}>📈</div>
    const expensesIcon = <div className={styles.expenseIcon}>📉</div>
    const balanceIcon = <div className={styles.balanceIcon}>💵</div>

    return <div className={styles.planDetails}>
        <div className={styles.generalInfo}>
            <GeneralInfo icon={incomesIcon} title="Всего доходов" value={incomesTotal === 0 ? "₽0" : formatSum(incomesTotal)} valueColor="#2e7d32" />
            <GeneralInfo icon={expensesIcon} title="Обязательные расходы" value="₽0" valueColor="#c62828" />
            <GeneralInfo icon={balanceIcon} title="Остаток" value="₽0" valueColor="#1565c0" progress={50} />
        </div>

        <div className={styles.detailsSection}>
            <DetailsCard title="Доходы" icon="📥" />
            <DetailsCard title="Обязательные расходы" icon="📤" />
        </div>

    </div>
}

export default PlanDetails;