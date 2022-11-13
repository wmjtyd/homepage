import { useSWRConfig } from 'swr';

import { useUpdateCompleted } from '../hooks/useCompleted';

function useMatchMutate() {
  const { cache } = useSWRConfig();
  return (matcher: RegExp) => {
    if (!(cache instanceof Map)) {
      throw new Error('matchMutate requires the cache provider to be a Map instance');
    }

    const keys = [];

    for (const key of cache.keys() as any) {
      if (matcher.test(key)) {
        keys.push(key);
      }
    }

    const mutations = keys.map((key) => {
      return useUpdateCompleted(key);
    });
    return mutations;
  };
}

export function completedMiddleware(useSWRNext: (arg0: any, arg1: any, arg2: any) => any) {
  return (key: any, fetcher: any, config: any) => {
    useMatchMutate()(new RegExp(`^"#key:"${key}",callback:`));
    return useSWRNext(key, fetcher, config);
  };
}
