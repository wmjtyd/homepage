import { fetchCompleted, useCompleted } from './useCompleted';

export const useFetchPagination = (
  key: any,
  {
    current,
    limit,
  }: {
    current: number;
    limit: number;
  }
) => {
  return {
    current,
    limit,
    data: fetchCompleted(key),
  };
};
/**
 * Key based paging of massive cached data
 */
export const usePagination = (
  key: any,
  {
    current,
    limit,
  }: {
    current: number;
    limit: number;
  }
) => {
  const index = (current - 1) * limit,
    lastIndex = current * limit;
  return {
    current,
    limit,
    data: useCompleted(key, (data = []) => {
      return data.slice(index, lastIndex);
    }),
  };
};

/**
 * Data based paging of massive cache data
 */
export const useDataPagination = (
  data: any[],
  {
    current,
    limit,
  }: {
    current: number;
    limit: number;
  }
) => {
  const index = (current - 1) * limit,
    lastIndex = current * limit;
  return {
    current,
    limit,
    length: data.length,
    data: data.slice(index, lastIndex),
  };
};
