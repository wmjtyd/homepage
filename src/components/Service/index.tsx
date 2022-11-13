import { useTranslation } from 'react-i18next';
import { AiOutlineLink } from "react-icons/ai";

export default () => {
  const { t } = useTranslation(['common']);
  return (
    <div className="index-main mx-auto flex flex-col">
      <div className="container">
        <div className="service-en-title">{t('OUER SERVICE')}</div>
        <h2 className="service-title">{t('业务一览')}</h2>
        <p className="service-desc">{t('WMJTYD 有众多业务，满足您公司的各项需求。')}</p>
        <div className="flex text-left">
          <div className="flex-1 service-card service-card-signal">
            <div className="main-cover">
              <h3 className="service-item-title">{t('信号服务')}</h3>
              <div className="service-item-desc">
                {t('利用业界领先技术取得交易信号，')}
                <br />
                {t('让您的交易抢占先机，无往不利。')}
              </div>
              <div>
                <a className="service-item-link"><AiOutlineLink className="inline"/>{t('深入了解')}</a>
                <a className="ml-10 service-item-link"><AiOutlineLink className="inline"/> {t('申请试用')}</a>
              </div>
              <div className="service-item-footer flex">
                <div className="flex-1 flex flex-col">
                  <div className="service-item-entitle">{t('FINANCIAL SERVICE')}</div>
                  <h4 className="service-item-cntitle">{t('金融业务')}</h4>
                </div>
                <div className="flex-1 relative">
                  <div className="absolute right-1 bottom-1">{t('信号 - 行情 - 交易')}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 service-card service-card-system">
            <div className="main-cover">
              <h3 className="service-item-title">{t('IT 系统开发')}</h3>
              <div className="service-item-desc">
                {t('咨询具有数十年专业开发经验的')}<br />
                {t('工程师, ')}
                {t('为您的系统锦上添花。')}
              </div>
              <div>
                <a className="service-item-link"><AiOutlineLink className="inline"/> {t('深入了解')}</a>
                <a className="ml-10 service-item-link"><AiOutlineLink className="inline"/> {t('立即咨询')}</a>
              </div>
              <div className="service-item-footer flex">
                <div className="flex-1 flex flex-col">
                  <div className="service-item-entitle">{t('ENTERPRISE SERVICE')}</div>
                  <h4 className="service-item-cntitle">{t('企业辅助')}</h4>
                </div>
                <div className="flex-1 relative">
                  <div className="absolute right-1 bottom-1">{t('系统开发 - 数据挖掘')}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="service-card flex-1 service-card-task">
            <div className="main-cover">
              <h3 className="service-item-title">{t('任务平台')}</h3>
              <div className="service-item-desc">
                {t('聚合团队及成员积累，')}
                {t('结合行业')}
                <br />{t('专家经验，')}
                {t('进行项目孵化')}
              </div>
              <div>
                <a className="service-item-link"><AiOutlineLink className="inline"/>{t('深入了解')}</a>
                <a className="ml-10 service-item-link"><AiOutlineLink className="inline"/> {t('查看示例')}</a>
              </div>
              <div className="service-item-footer flex">
                <div className="flex-1 flex flex-col">
                  <div className="service-item-entitle">{t('PROJECT INCUBATION')}</div>
                  <h4 className="service-item-cntitle">{t('项目孵化')}</h4>
                </div>
                <div className="flex-1 relative">
                  <div className="absolute right-1 bottom-1">{t('任务 - 电商 - 人力')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
