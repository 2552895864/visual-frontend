import { createContext } from "react";
import { LANG_ZH_CN_VALUE } from "@/constants";
export const LangContext = createContext({
  lang: LANG_ZH_CN_VALUE,
  setLang: () => {},
});
export const LangProvider = LangContext.Provider;
