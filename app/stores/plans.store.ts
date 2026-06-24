import { create } from 'zustand';
import { plans as plansApi } from '../api/methods';
import { PlanType } from '../types/types';

interface PlansState {
    plans: PlanType[];
    activePlan: number | null;
    loading: boolean;

    setActivePlan: (id: number) => void;

    fetchAllPlans: () => Promise<PlanType[]>;
}

const initialState: Omit<PlansState, 'fetchAllPlans' | 'setActivePlan'> = {
    plans: [],
    activePlan: null,
    loading: false
}

const usePlansStore = create<PlansState>((set) => ({
   ...initialState,

   setActivePlan: (id: number) => set({ activePlan: id }),

   fetchAllPlans: async () => {
       const plans = await plansApi.allPlans();
       
       set({ plans, activePlan: plans.length > 0 ? plans[plans.length - 1].id : null });

       return plans;
   }
}))

export default usePlansStore;
