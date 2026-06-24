import { getRequest } from "../config";;

const methods = {
  incomesByDate: (dateFrom: string, dateTo: string) =>
    getRequest('income/all', { params: { dateFrom, dateTo } }),
};
export default methods;