import { useState } from "react";
import intl from "react-intl-universal";

const locales = {
  "en-US": require("@/locales/en.json"),
  "zh-CN": require("@/locales/zh.json"),
};

const useLocale = () => {
  const [lang, setLang] = useState("zh-CN");
  intl.init({
    warningHandler: (msg, detail) => {
      //注意该函数开发环境有，打包后就没有了
      console.log(`${msg} ${detail}`);
    },
    currentLocale: lang,
    locales,
  });
  return {
    lang,
    setLang,
  };
};

export default useLocale;
