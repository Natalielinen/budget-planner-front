'use client';

import { useEffect } from "react";
import { Chip } from "@/app/shared";
import usePlansStore from "@/app/stores/plans.store";
import { format } from "date-fns";
import { PlusIcon } from "lucide-react";
import useIncomesStore from "@/app/stores/incomes.store";
import { PlanType } from "@/app/types/plans";

import styles from "./Plans.module.scss";
import usePlanExpensesStore from "@/app/stores/planExpenses.store";

const Plans = () => {
    const { plans, activePlan, setActivePlan, fetchAllPlans } = usePlansStore();
    const { fetchIncomes } = useIncomesStore();
    const { fetchAllPlanExpenses } = usePlanExpensesStore()

    const getPlans = async () => {
        const plans = await fetchAllPlans();

        if (plans.length > 0) {
            fetchIncomes(plans[plans.length - 1].dateFrom, plans[plans.length - 1].dateTo);
            fetchAllPlanExpenses(plans[plans.length - 1].dateFrom, plans[plans.length - 1].dateTo);
        }
    };

    useEffect(() => {
        getPlans()
        // eslint-disable-next-line react-hooks/exhaustive-deps 
    }, []);

    const onChangeRange = (id: number, dateFrom: string, dateTo: string) => {
        setActivePlan(id);
        fetchIncomes(dateFrom, dateTo);
        fetchAllPlanExpenses(dateFrom, dateTo)
    };

    return <div className={styles.plans}>
        {plans.length > 0 ? plans.map((plan: PlanType) => (
            <Chip
                key={plan.id}
                text={`${format(plan.dateFrom, 'dd.MM')} - ${format(plan.dateTo, 'dd.MM')}`}
                onClick={() => onChangeRange(plan.id, plan.dateFrom, plan.dateTo)}
                isActive={activePlan === plan.id}
            />
        )) : null}
        <Chip text="Добавить план" startAdornment={<PlusIcon size={16} />} />
    </div>
}

export default Plans;