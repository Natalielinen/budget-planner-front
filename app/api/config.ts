import axios, { AxiosRequestConfig } from "axios";


type HTTP_METHOD = "get" | "post" | "put" | "patch" | "delete";
interface CustomAxiosRequestConfig extends AxiosRequestConfig {
  params?: Record<string, unknown>;
  baseUrl?: string;
}

const apiClient = axios.create({
  baseURL: "http://localhost:3001/"
});

apiClient.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

const makeRequest = (method: HTTP_METHOD) => async (url: string, config?: CustomAxiosRequestConfig) => {
  const { data: responseData } = await apiClient[method](url, config);
  return  responseData;
};

const getRequest = makeRequest("get");
// const postRequest = makeRequestWithData("post");
// const postRequestFormData = makePostRequestWithFormData("post");
// const putRequest = makeRequestWithData("put");
// const patchRequest = makeRequestWithData("patch");
// const deleteRequest = makeRequest("delete");
// const downloadRequest = makeRequestForDownload("get");
export { getRequest };