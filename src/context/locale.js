import { createContext } from "react";
export const LangContext = createContext({
  lang: "zh-CN",
  setLang: () => {},
});
export const LangProvider = LangContext.Provider;
