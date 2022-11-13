import { useTranslation } from 'react-i18next';
import { AiFillGithub, AiOutlineSlack, AiOutlineQq  } from "react-icons/ai";
import { BsTelegram } from 'react-icons/bs';

export default () => {
  const { t } = useTranslation(['common']);
  return <div className="mx-auto footer py-10 text-4 text-white mt-10">
    <div className="container grid grid-cols-11 gap-4">
    <div className="col-span-4">
      <div className="footer-title">{t('团队介绍')}</div>
      <p className="mt-5">{t('团队成立于 2012 年，利用剩余价值，我们聚合了大量的民间高手，')}
        {t('通过挖掘技术发现未知，创造价值。')}</p>
      <p className="mt-10">{t('团队通过紧密协作，服务各应用领域。目前团队成员主要从事金融、')}
        {t('电信、互联网等行业，积累了广泛且丰富的多行业经验。')}</p>
    </div>
    <div className="col-span-5">
      <div className="footer-title">{t('联络团队')}</div>
      <div className="grid grid-cols-2 gap-2 text-[14px] footer-team">
        <div className="grid-cols-1 mt-5">
          <AiFillGithub className="inline" /><a>wmjtyd</a><br />
          {t('开发核心将在 Github 进行。')}
        </div>
        <div className="grid-cols-1 mt-5">
          <BsTelegram className="inline" /><a>@wmjtyd</a><br />
          {t('wmjtyd 的研讨 Telegram 群。')}
        </div>
        <div className="grid-cols-1 mt-5">
          <AiOutlineSlack className="inline" /><a>#wmjtyd</a><br />
          {t('团队多数讨论都在 Slack 进行。')}<br />
          {t('有任何需要都可以在 Slack 发问。')}
        </div>
        <div className="grid-cols-1 mt-5">
          <AiOutlineQq className="inline" /><a>596 378 477</a><br />
          {t('wmjtyd 的 QQ 研讨群。')}
        </div>
      </div>
    </div>
    <div className="col-span-2">
      <div className="footer-title">{t('网站地图')}</div>
      <div className="grid grid-cols-2 gap-6 footer-site-map">
        <ol className="grid-cols-1">
          <li>{t('金融业务')}</li>
          <ol>
            <li>{t('信号')}</li>
            <li>{t('行情')}</li>
            <li>{t('交易')}</li>
          </ol>
        </ol>
        <ol className="grid-cols-1">
          <li>{t('项目孵化')}</li>
          <ol>
            <li>{t('任务')}</li>
            <li>{t('电商')}</li>
            <li>{t('人力')}</li>
          </ol>
        </ol>
        <ol className="grid-cols-1">
          <li>{t('企业辅助')}</li>
          <ol>
            <li>{t('系统开发')}</li>
            <li>{t('数据挖掘')}</li>
          </ol>
        </ol>
      </div>
    </div>
    </div>
  </div>
}
