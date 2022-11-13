declare module 'template-js/components' {
  type NotifyParam = { content: string; duration?: number };
  type NotifyFunc = (param: NotifyParam) => void;
  class Notify {
    static success: NotifyFunc;
    static error: NotifyFunc;
  }
}
declare module 'theme-change';
declare module 'react-copy-to-clipboard';
declare module 'tailwindcss/resolveConfig';
declare module 'tailwindcss/colors';