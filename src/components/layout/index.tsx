import { completedMiddleware } from '@xweb3/swr-store';
import { SWRConfig } from 'swr';

import fetcher from '@/api/fetcher';
import { FMessage } from '@/components/Message';

import { ChangeLanguage } from '../i18n/ChangeLanguage';

export function localStorageProvider() {
  let map = new Map();
  if (typeof window !== 'undefined') {
    map = new Map(JSON.parse(window.localStorage.getItem('app-cache') || '[]'));

    window.addEventListener('beforeunload', () => {
      const appCache = JSON.stringify(Array.from(map.entries()));
      window.localStorage.setItem('app-cache', appCache);
    });
  }

  return map;
}

function Layout({ children, ...props }: any) {
  const { fallback = {}, ...rect } = props;
  return (
    <SWRConfig
      value={{
        // https://swr.vercel.app/zh-CN/docs/options
        // dedupingInterval: 10000,
        // revalidateOnFocus: false,
        // revalidateIfStale: false,
        // revalidateOnMount: false,
        // refreshInterval: 10000,
        // provider: localStorageProvider,
        fallback,
        fetcher: fetcher,
        use: [completedMiddleware],
      }}
    >
      <div className="flex h-screen" {...rect}>
        <div className="flex h-screen flex-1 flex-col">
          <div className="flex-rows flex w-full flex-1 overflow-y-auto">{children}</div>
          <FMessage />
        </div>
      </div>
    </SWRConfig>
  );
}

export default Layout;
