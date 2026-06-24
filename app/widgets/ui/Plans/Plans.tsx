'use client';

import { useEffect } from "react";
import { Chip } from "@/app/shared";
import { PlanType } from "@/app/types/types";
import usePlansStore from "@/app/stores/plans.store";
import { format } from "date-fns";
import { PlusIcon } from "lucide-react";
import useIncomesStore from "@/app/stores/incomes.store";

import styles from "./Plans.module.scss";

const Plans = () => {
    const { plans, activePlan, setActivePlan, fetchAllPlans } = usePlansStore();
    const { fetchIncomes } = useIncomesStore();

    const getPlans = async () => {
        const plans = await fetchAllPlans();

        if (plans.length > 0) {
            fetchIncomes(plans[plans.length - 1].dateFrom, plans[plans.length - 1].dateTo)
        }
    };

    useEffect(() => {
        getPlans()
        // eslint-disable-next-line react-hooks/exhaustive-deps 
    }, []);

    const onChangeRange = (id: number, dateFrom: string, dateTo: string) => {
        setActivePlan(id);
        fetchIncomes(dateFrom, dateTo);
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