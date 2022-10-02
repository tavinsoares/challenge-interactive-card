import { createContext, useContext, useReducer } from 'react';

export const CardCreditContext = createContext();

export const useCardCreditContext = () => {
    const context = useContext(CardCreditContext);

    if(!context){
        throw new Error('[Context] The component must be used with a Provider');
    }

    return context;
}