const path = require('path');
// const LanguageDetector = require('i18next-browser-languagedetector').default;

module.exports = {
  i18n: {
    defaultLocale: 'zh',
    reloadOnPrerender: true,
    locales: ['zh', 'en', 'zh-Hant', 'ja', 'id'],
    // use: [LanguageDetector],
  },
  serializeConfig: false,
  localePath: path.resolve('./public/locales'),
  resources: {
    en: {
      common: require('./public/locales/en/common.json')
    },
    ja: {
      common: require('./public/locales/ja/common.json')
    },
    zh: {
      common: require('./public/locales/zh/common.json')
    },
    id: {
      common: require('./public/locales/id/common.json')
    },
    'zh-Hant': {
      common: require('./public/locales/zh-Hant/common.json')
    }
  },
};