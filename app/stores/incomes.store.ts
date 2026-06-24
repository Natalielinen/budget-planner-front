import { create } from "zustand";
import {  IncomesType } from "../types/incomes";
import { incomes as incomesApi } from "../api/methods";

interface IncomesState {
    incomes: IncomesType[];
    incomesTotal: number;

    fetchIncomes: (dateFrom: string, dateTo: string) => Promise<void>;
}

const initialState: Omit<IncomesState, 'fetchIncomes'> = {
    incomes: [],
    incomesTotal: 0
}

const useIncomesStore = create<IncomesState>((set) => ({
    ...initialState,

    fetchIncomes: async (dateFrom: string, dateTo: string) => {
        const {incomes, total} = await incomesApi.incomesByDate(dateFrom, dateTo);

        set({ incomes, incomesTotal: total });
    },
}));

export default useIncomesStore;