"use client";

import {
  createContext,
  useContext,
  useState,
  type ReactNode,
  useEffect,
} from "react";

type Language = "en" | "es";

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
type Locals = Record<string, any>;
interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  locals: Locals;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

interface LanguageProviderProps {
  children: ReactNode;
  initialLanguage?: Language;
}

export function LanguageProvider({
  children,
  initialLanguage = "en",
}: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>(initialLanguage);
  const [locals, setLocals] = useState<Locals>({});
  useEffect(() => {
    const loadLocals = async () => {
      const content = await import(`../public/locals/${language}.json`);
      setLocals(content.default);
    };
    loadLocals();
  }, [language]);
  return (
    <LanguageContext.Provider value={{ language, setLanguage, locals }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
