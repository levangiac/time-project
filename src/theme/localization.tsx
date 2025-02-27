import React, { createContext, useContext, useState } from 'react';
import strings, { DEFAULT_LANGUAGE } from '~constants/string';
import { getAppLanguage, updateAppLanguage } from '~utils/asyncStorage';

export const LocalizationContext = createContext({
  strings,
  setAppLanguage: (items: string) => {},
  initializeAppLanguage: () => {},
  appLanguage: strings.getLanguage(),
});
interface Props {
  children?: React.ReactNode;
}
export const LocalizationProvider: React.FC<Props> = ({ children }) => {
  const [appLanguage, setAppLanguage] = useState<string>('');

  const setLanguage = (language: string) => {
    strings.setLanguage(language);
    setAppLanguage(language);
    updateAppLanguage(language);
  };

  const initializeAppLanguage = () => {
    getAppLanguage()
      .then((language) => {
        if (language) {
          setLanguage(language);
        } else {
          let localeCode = DEFAULT_LANGUAGE;
          setLanguage(localeCode);
        }
      })
      .catch((err) => {
        console.log('🚀 ~ initializeAppLanguage ~ err:', err);
      });
  };

  return (
    <LocalizationContext.Provider
      value={{
        strings,
        setAppLanguage: setLanguage,
        initializeAppLanguage,
        appLanguage,
      }}
    >
      {children}
    </LocalizationContext.Provider>
  );
};
export const useLocalizationContext = () => useContext(LocalizationContext);
