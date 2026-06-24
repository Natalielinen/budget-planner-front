import { getRequest } from "../config";

const methods = {
  allPlans: () =>
    getRequest('plan/all'),
};
export default methods;