import { useTranslation } from 'react-i18next';
import { ChangeLanguage } from '../i18n/ChangeLanguage';

export default () => {
  const { t } = useTranslation(['common']);
  return (
    <div className="container mx-auto flex flex-row items-center">
      <a href="/" className="logo-bg">
      </a>
      <div className="flex-1 flex justify-end items-center">
        <ChangeLanguage />
        <button className="pin-bg rounded-full px-3 h-8">{t('加入国际')}</button>
      </div>
    </div>
  );
};
