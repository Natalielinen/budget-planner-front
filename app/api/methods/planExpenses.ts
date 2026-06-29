import { getRequest } from "../config";

const methods = {
  allPlanExpenses: (dateFrom: string, dateTo: string) =>
    getRequest('plan-expense/all', { params: { dateFrom, dateTo } }),
};
export default methods;