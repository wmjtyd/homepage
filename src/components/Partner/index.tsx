import { useTranslation } from 'react-i18next';

export default () => {
  const { t } = useTranslation(['common']);
  return (
    <div className="index-main mx-auto flex flex-col">
      <div className="container">
        <div>
          <div className="service-en-title">{t('PATNERS')}</div>
          <h2 className="service-title">{t('合作伙伴')}</h2>
          <p className="service-desc">{t('WMJTYD 与众多企业、大学和国家机构合作，一起研究前沿技术。')}</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 my-10">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((val, key) => (
            <div key={key} className="border" >
              <img src="" alt={String(val)} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
