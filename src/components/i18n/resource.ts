import en from "@/public/locales/en/common.json";
import ja from "@/public/locales/ja/common.json";
import zh from "@/public/locales/zh/common.json";
import zhHant from "@/public/locales/zh-Hant/common.json";

export const languages = [
  {
    label: "English",
    type: "en",
    icon: "fi fi-cn"
  },
  {
    label: "简体中文",
    type: "zh",
  },
  {
    label: "繁體中文",
    type: "zh-Hant",
  },
  {
    label: "日本語",
    type: "ja",
  },
];

export const resources = {
  en,
  ja,
  zh,
  "zh-Hant": zhHant,
};
