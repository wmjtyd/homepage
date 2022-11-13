export const baseApi = (url?: string) => {
  if (!url && typeof window !== "undefined") {
    url = window.localStorage.getItem("env_api") ||
      process.env.NEXT_PUBLIC_API_URL;
  }

  return url;
};

export const baseRpcApi = process.env.NEXT_PUBLIC_RPC_URL;
export const appUrl = process.env.NEXT_PUBLIC_APP_URL;

export const serverApi = process.env.NEXT_PUBLIC_SERVER_API;

export const isFetcherLock = false; // boolean

export const apis = [];

