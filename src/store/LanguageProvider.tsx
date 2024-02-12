import React, { createContext, useContext, useReducer, ReactNode } from "react";

enum Languages {
  SK = "SK",
  EN = "EN",
}

interface LanguageContextType {
  language: Languages;
}

interface LanguageDispatchContextType {
  dispatch: React.Dispatch<LanguageAction>;
}

const LanguageContext = createContext<LanguageContextType | null>(null);
const LanguageDispatchContext =
  createContext<LanguageDispatchContextType | null>(null);

enum LanguageActionKind {
  SWITCH = "SWITCH",
}

interface LanguageAction {
  type: LanguageActionKind;
  payload: Languages;
}

const initialLanguage: Languages = Languages.SK;

export function useLanguage() {
  return useContext(LanguageContext);
}

export function useLanguageDispatch() {
  return useContext(LanguageDispatchContext);
}

function languageReducer(language: Languages, action: LanguageAction) {
  switch (action.type) {
    case LanguageActionKind.SWITCH: {
      return language === Languages.EN ? Languages.SK : Languages.EN;
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, dispatch] = useReducer(languageReducer, initialLanguage);

  return (
    <LanguageContext.Provider value={{ language: language }}>
      <LanguageDispatchContext.Provider value={{ dispatch: dispatch }}>
        {children}
      </LanguageDispatchContext.Provider>
    </LanguageContext.Provider>
  );
}
