import { useTranslation } from 'react-i18next';

export default () => {
  const { t } = useTranslation(['common']);
  return (
    <div className="index-main mx-auto flex flex-col">
      <div className="container">
      <div>
        <div className="service-en-title">{t('CASES')}</div>
        <h2 className="service-title">{t('成功案例')}</h2>
      </div>
      <div className="cases-item cases-finance">
        <div className="cases-item-title">{t('#金融')}</div>
        <p className="cases-item-desc">{t('WMJTYD 信号服务，')}<br />
        {t('准确率已高达9成。')}
        </p>
        {/* <a className="cases-item-link text-right">{t('阅读文章')} 〉</a> */}
      </div>
      <div className="cases-item cases-partner">
        <div className="cases-item-title">{t('#合作伙伴')}</div>
        <p className="cases-item-desc">{t('WMJTYD 与高校合作，')}<br />
        {t('一同研发前沿技术')}</p>
        {/* <a className="cases-item-link text-right">{t('阅读文章')} 〉</a> */}
      </div>
      </div>
    </div>
  );
};
