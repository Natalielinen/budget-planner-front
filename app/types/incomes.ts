export type IncomesType = {
    amount: number;
    source: string;
    currency: string;
    date: string;
}

export type IncomesDTO = {
    incomes: IncomesType[];
    total: number;
}