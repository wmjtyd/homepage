import { useTranslation } from 'react-i18next';

export default () => {
  const { t } = useTranslation(['common']);
  return (
    <div className="index-main flex flex-col introduce-main">
      <div className="main-cover">
        <p className="container">
          {t('利用')}
          <span className="highliht">{t('新技术、新模式、大数据')}</span>
          <br />
          {t('为企业及个人提供方法论，')}
          <br />
          {t('寻找新的增长点!')}
        </p>
        <div className="main">
          <a className="main-link">{t('介绍视频')}  〉</a>
          <a className="main-link">{t('成功案例')}  〉</a>
        </div>
      </div>
    </div>
  );
};
