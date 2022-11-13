import { useSWRConfig } from 'swr';

export const useSearch = (keyOrdata: any, filter: Record<keyof any, any>) => {
  const { cache } = useSWRConfig();
  const { data } = cache.get(keyOrdata);
  if (data && Array.isArray(data)) {
    return data.find((_val: Record<keyof any, any>) =>
      Object.keys(filter)
        .map((v) => filter[v] === _val[v])
        .every((v) => v)
    );
  } else if (Array.isArray(keyOrdata)) {
    return keyOrdata.find((_val: Record<keyof any, any>) =>
      Object.keys(filter)
        .map((v) => filter[v] === _val[v])
        .every((v) => v)
    );
  }
};

/**
 * Retrieve data from provided data
 */
export const useFilterFromData = (data: any[], filter: Record<keyof any, any>) => {
  return data.find((_val: Record<keyof any, any>) =>
    Object.keys(filter)
      .map((v) => filter[v] === _val[v])
      .every((v) => v)
  );
};

/**
 * Retrieve data from the provided key value
 */
export const useFilterFromKey = (key: any, filter: Record<keyof any, any>) => {
  const { cache } = useSWRConfig();
  const { data } = cache.get(key);
  return data.find((_val: Record<keyof any, any>) =>
    Object.keys(filter)
      .map((v) => filter[v] === _val[v])
      .every((v) => v)
  );
};
