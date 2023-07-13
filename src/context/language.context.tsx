import { createContext, ReactNode, useContext, useState } from "react";

interface LanguageContextType {
  language: string;
  setLanguage: (language: string) => void;
  switchLanguage: () => void;
}

export const LanguageContext = createContext<LanguageContextType>({
  language: "",
  setLanguage: () => {},
  switchLanguage: () => {},
});

interface Props {
  children: ReactNode;
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context)
    throw new Error("useLanguage must be used with a language provider");
  return context;
};

export const LanguageContextProvider: React.FC<Props> = ({ children }) => {
  const [language, setLanguage] = useState<string>("en");

  const switchLanguage = () => {
    if (language === "es") {
      setLanguage("en");
    } else {
      setLanguage("es");
    }
  };

  const value: LanguageContextType = {
    language,
    setLanguage,
    switchLanguage,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
