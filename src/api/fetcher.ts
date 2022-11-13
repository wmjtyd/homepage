import axios from 'axios';
import useSWR from 'swr';

import { AnyMap } from '@/types/common';

import { baseApi, isFetcherLock } from './base';

export interface ResponseData<T = any> {
  statusCode: number;
  data: T;
  message: string;
}

export enum EHttpMethods {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

export interface RequestOptions {
  headers?: HeadersInit;
  signal?: AbortSignal;
  method?: 'GET' | 'POST' | 'PATCH' | 'DELETE' | 'PUT'; // EHttpMethods;
  query?: AnyMap;
  data?: AnyMap;
  body?: string;
  timeout?: number;
  credentials?: 'include' | 'same-origin';
  mode?: 'cors' | 'same-origin';
  cache?: 'no-cache' | 'default' | 'force-cache';

  fallbackData?: any; // IPageConfigData[]
}

export default async function fetcher(
  url: string,
  options: any
  // AxiosRequestConfig<any> = {
  //   method: 'GET',
  // }
): Promise<any> {
  url = /^http/.test(url) ? url : `${baseApi()}${url}`;

  const res = await axios(url, options);

  return await res.data;
}

export function useFetcher(url: string | null, options?: RequestOptions) {
  // if (!url) return
  // url = /^http/.test(url) ? url : `${baseApi()}${url}`
  const { fallbackData } = options || {};
  if (isFetcherLock) {
    return {
      data: fallbackData,
      error: null,
    };
  }
  const { data, error } = useSWR(url, fetcher);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
}
