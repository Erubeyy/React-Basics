import { useReducer } from "react";
import { type State, type Action, type Language, type FromLanguage } from "../types";

// 1. Create an initial state
const initialState: State = {
  fromLanguage: 'auto',
  toLanguage: 'en',
  fromText: '',
  result: '',
  loading: false
}

// 2. Create a reducer
function reducer(state: State, action: Action) {
  const { type } = action;

  if (type == 'SWAP_LANGUAGES') {
    return {
      ...state,
      fromLanguage: state.toLanguage,
      toLanguage: state.fromLanguage
    }
  }

  if (type === 'SET_FROM_LANGUAGE') {
    return {
      ...state,
      fromLanguage: action.payload
    }
  }

  if (type === 'SET_TO_LANGUAGE') {
    return {
      ...state,
      toLanguage: action.payload
    }
  }

  if (type === 'SET_FROM_TEXT') {
    return {
      ...state,
      loading: true,
      fromText: action.payload
    }
  }

  if (type === 'SET_RESULT') {
    return {
      ...state,
      loading: false,
      result: action.payload
    }
  }

  return state;
}

export const useStore = () => {
  // 3. use the reducer hook and pass the reducer and the initialState
  const [{
    fromLanguage, 
    toLanguage, 
    fromText, 
    result, 
    loading
  } , dispatch] = useReducer(reducer, initialState);

  const swapLanguages = () => dispatch({type: 'SWAP_LANGUAGES'});

  const setFromLanguage = (payload: FromLanguage) => dispatch({type: 'SET_FROM_LANGUAGE', payload});

  const setToLanguage = (payload: Language) => dispatch({type: 'SET_TO_LANGUAGE', payload});

  const setFromText = (payload: string) => dispatch({type: 'SET_FROM_TEXT', payload });

  const setResult = (payload: string) => dispatch({type: 'SET_RESULT', payload });

  return {
    fromLanguage,
    toLanguage,
    fromText,
    result,
    loading,
    swapLanguages,
    setFromLanguage,
    setToLanguage,
    setFromText,
    setResult
  }
}