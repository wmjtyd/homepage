import { useTranslation } from 'react-i18next';
import { ChangeLanguage } from '../i18n/ChangeLanguage';

export default () => {
  const { t } = useTranslation(['common']);
  return (
    <div className="container mx-auto flex flex-row items-center px-2 xl:px-0">
      <a href="/" className="logo-bg">
      </a>
      <div className="flex-1 flex justify-end items-center">
        <ChangeLanguage />
        <a href={t('https://github.com/wmjtyd')}><button className="pin-bg rounded-full px-3 h-8">{t('加入我们')}</button></a>
      </div>
    </div>
  );
};
