import colors from 'tailwindcss/colors';
import resolveConfig from 'tailwindcss/resolveConfig';

import tailwindConfig from '../../../tailwind.config';

const fullConfig = resolveConfig(tailwindConfig);

export const themeType = typeof window !== 'undefined' ? window.localStorage.getItem('theme') : 'default';

export const getTheme = () => {
  let theme = '';
  if (typeof window !== 'undefined') {
    theme = window.localStorage.getItem('theme') || '';
  }
  return theme;
};
export const setTheme = (val: string) => {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem('theme', val);
  }
  return val;
};
export const themes = fullConfig.daisyui.themes;
export const myTheme = ['default', 'light'];
export const theme = fullConfig.theme;
export const tcolors = colors;
