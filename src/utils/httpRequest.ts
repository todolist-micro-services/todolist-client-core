import axios, { AxiosRequestConfig } from "axios";

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

interface HttpRequestOptions {
  endpoint: string;
  method: HttpMethod;
  headers?: Record<string, string>;
  body?: any;
}

async function httpRequest(options: HttpRequestOptions): Promise<any> {
  const { endpoint, method, headers, body } = options;

  const axiosConfig: AxiosRequestConfig = {
    method,
    url: endpoint,
    headers,
    data: body,
  };

  try {
    const response = await axios(axiosConfig);
    return response.data;
  } catch (error) {
    console.error("Error in httpRequest:", error);
    throw error;
  }
}

export { httpRequest };
