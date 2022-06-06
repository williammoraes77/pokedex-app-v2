import axios, { Method, AxiosResponse } from 'axios';

const { APP_URL } = process.env;

export interface IHttpClient {
  url: string;
  method: Method;
  data?: any;
  params?: any;
}

export default async function httpClient({
  url,
  method,
  data,
  params,
}: IHttpClient): Promise<AxiosResponse> {
  try {
    return await axios({
      url: `${APP_URL}/${url}`,
      method,
      data,
      params,
    });
  } catch (error) {
    throw error;
  }
}
