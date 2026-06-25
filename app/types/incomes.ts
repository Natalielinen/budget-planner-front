export type IncomesType = {
    id: number;
    amount: string;
    source: string;
    currency: string;
    date: string;
}

export type IncomesDTO = {
    incomes: IncomesType[];
    total: number;
}