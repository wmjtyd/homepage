// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AnyMap = Record<string, any>;

export interface IPageConfigData {
  [key: string]: any;
}
export interface IfallbackMap {
  [url: string]: IPageConfigData[];
}

export interface IfallbackOptions {
  fallback: IfallbackMap;
  ids?: string;
  id?: string;
}

export interface IfallbackObjectOptions {
  fallback: {
    [url: string]: IPageConfigData;
  };
}
