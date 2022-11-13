import { unstable_serialize, useSWRConfig } from 'swr';

/**
 * Data status management
 * @returns
 */
export const useStore = (key: any, value: any) => {
  const { cache } = useSWRConfig();
  const getKey = unstable_serialize(key);
  if (value) {
    cache.set(getKey, value);
    return value;
  }
  return cache.get(getKey);
};
