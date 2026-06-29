import { create } from "zustand";
import { planExpenses as planExpensesApi } from "../api/methods";
import { PlanExpensesType } from "../types/planExpenses";

interface PlanExpensesState {
  planExpenses: PlanExpensesType[];

  fetchAllPlanExpenses: (dateFrom: string, dateTo: string) => Promise<void>;
}

const initialState: Omit<PlanExpensesState, "fetchAllPlanExpenses"> = {
  planExpenses: [],
};

const usePlanExpensesStore = create<PlanExpensesState>((set) => ({
  ...initialState,

  fetchAllPlanExpenses: async (dateFrom: string, dateTo: string) => {
    const planExpenses = await planExpensesApi.allPlanExpenses(
      dateFrom,
      dateTo,
    );

    set({ planExpenses });
  },
}));

export default usePlanExpensesStore;
