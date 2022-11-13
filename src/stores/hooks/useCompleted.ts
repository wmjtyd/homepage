import useSWR, { unstable_serialize, useSWRConfig } from "swr";

import fetcher from "../common/fetcher";

export const fetchCompleted = (key: any, update = false) => {
  const { cache } = useSWRConfig();
  /**
   * It is necessary to realize dynamic data update and monitor the dynamic change of key.
   */
  const getKey = unstable_serialize(key);
  const cacheData = cache.get(getKey) || [];
  if (!!cacheData.length && !update) return cacheData;

  // Cache data
  const rData = cache.get(key);
  // console.log('rData', rData);
  if (rData?.data) {
    return rData.data;
  } else {
    const { data } = useSWR(key, fetcher);
    cache.set(getKey, {
      api: key,
      data,
    });
    return data;
  }
};
/**
 * Data calculation and storage
 *
 * Get 'useSWR' cache data through key,
 * Use callback for data filtering,
 * Use the key and callback to cache the data for newkey.
 * The data will be fetched from the cache next time.
 *
 * @returns
 *
 * @example
 * ```ts
 * const data = useCompleted(key, (data = []) => {
 *   return data.slice(index, lastIndex);
 * })
 * ```
 */
export const useCompleted = (
  key: any,
  callback: (data: any) => any,
  update = false,
) => {
  const { cache } = useSWRConfig();
  /**
   * It is necessary to realize dynamic data update and monitor the dynamic change of key.
   */
  const getKey = unstable_serialize({ key, callback: callback.toString() });
  const cacheData = cache.get(getKey) || [];
  if (!!cacheData.length && !update) return cacheData;

  // Cache data
  const rData = callback(cache.get(key));
  !!rData &&
    cache.set(getKey, {
      api: key,
      callback,
      data: rData,
    });
  return rData;
};

export function useUpdateCompleted(key: any) {
  const { cache } = useSWRConfig();
  const { api, callback } = cache.get(key);
  return callback ? useCompleted(api, callback) : null;
}
