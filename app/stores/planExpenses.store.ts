import { create } from "zustand";
import { planExpenses as planExpensesApi } from "../api/methods";
import { PlanExpensesType } from "../types/planExpenses";

interface PlanExpensesState {
  planExpenses: PlanExpensesType[];
  totalPlanExpenses: number;

  fetchAllPlanExpenses: (dateFrom: string, dateTo: string) => Promise<void>;
}

const initialState: Omit<PlanExpensesState, "fetchAllPlanExpenses"> = {
  planExpenses: [],
  totalPlanExpenses: 0
};

const usePlanExpensesStore = create<PlanExpensesState>((set) => ({
  ...initialState,

  fetchAllPlanExpenses: async (dateFrom: string, dateTo: string) => {
    const {expenses: planExpenses, total: totalPlanExpenses} = await planExpensesApi.allPlanExpenses(
      dateFrom,
      dateTo,
    );

    set({ planExpenses, totalPlanExpenses });
  },
}));

export default usePlanExpensesStore;
