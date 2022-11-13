import axios from "axios";
import useSWR from "swr";

import { baseApi } from "@/api/base";

export const baseConfigApi = () => {
  const jtydApi = typeof window !== "undefined"
    ? window.localStorage.getItem("jtydApi")
    : baseApi();
  return jtydApi;
};

export enum EHttpMethods {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  PATCH = "PATCH",
  DELETE = "DELETE",
}

export default async function fetcher(
  url: string | null | undefined,
  options: any = {
    // AxiosRequestConfig<any> = {
    method: "GET",
  },
): Promise<any> {
  url = url ? (/^http/.test(url) ? url : `${baseConfigApi()}${url}`) : "";
  const res = await axios(url, options);
  return res.data;
}

export function useFetcher(url: string | null, options?: any) {
  // AxiosRequestConfig<any>) {
  const { data, error } = useSWR(url, (url) => fetcher(url, options));

  return {
    data,
    loading: !error && !data,
    error,
  };
}
