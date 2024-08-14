import { AUTO_LANGUAGE, SUPPORTED_LANUGAGES } from "./constants";

export type Language = keyof typeof SUPPORTED_LANUGAGES;
export type AutoLanguage = typeof AUTO_LANGUAGE;
export type FromLanguage = Language | AutoLanguage;

export type State = {
  fromLanguage: FromLanguage,
  toLanguage: Language,
  fromText: string,
  result: string,
  loading: boolean
}

export type Action = 
  | {type: 'SET_FROM_LANGUAGE', payload: FromLanguage}
  | {type: 'SWAP_LANGUAGES'}
  | {type: 'SET_TO_LANGUAGE', payload: Language}
  | {type: 'SET_FROM_TEXT', payload: string}
  | {type: 'SET_RESULT', payload: string}