import { useTranslation } from 'react-i18next';

import { themes } from './config';

export const ThemeChange = () => {
  const { t } = useTranslation(['common']);
  return (
    <select className="tab-normal tab w-20 rounded-r-full bg-base-200" data-choose-theme>
      {themes.map((v: string | object, k: number) => {
        return typeof v === 'string' ? (
          <option value={v} key={k}>
            {v}
          </option>
        ) : (
          <option value="" key={k}>
            {t('Default')}
          </option>
        );
      })}
    </select>
  );
};
