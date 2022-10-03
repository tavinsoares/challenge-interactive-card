import { createContext, useContext, useReducer } from 'react';
import { 
    validateCardNumber,
    validateCardName,
    validateMonthyValid,
    validateYearValid,
    validateCVCNumber
} from './validators'

export const CardCreditContext = createContext();

export const useCardCreditContext = () => {
    const context = useContext(CardCreditContext);

    if(!context){
        throw new Error('[Context] The component must be used with a Provider');
    }

    return context;
}
const obj = {
    value: '',
    hasError: '',
    msgError: ''
};

const reducer = (state, action) => {
    switch(action.type){
        case 'SET_CARD_CREDIT':
            return { 
                ...state, 
                cardCredit: 
                {
                    ...state.cardCredit, [action.key]: {
                    value: action.value,
                    hasError: action?.hasError,
                    msgError: action?.msgError
                }}
            }
        case 'SUCESS':
            return {
                ...state,
                sucess: action.sucess
            }
        case 'RESET':
            return {
                cardCredit: { 
                    cardName: obj,
                    cardNumber: obj,
                    monthyValid: obj,
                    yearValid: obj,
                    cvc: obj
                },
                sucess: false,
            }
        default:
            return {}
    }
}

export const useCardCredit = () => {
    const [state, dispatch] = useReducer(reducer, {
        cardCredit: { 
            cardName: obj,
            cardNumber: obj,
            monthyValid: obj,
            yearValid: obj,
            cvc: obj
        },
        sucess: false,
    });
    
    const { cardCredit, sucess } = state;

    const setCardCredit = (key, value) => dispatch({type: 'SET_CARD_CREDIT', ...validateValue(key, value) });
    const changeSucess = (sucess) => dispatch({type: 'SUCESS', sucess: sucess});
    const resetData = () => dispatch({type: 'RESET' });
    
    const validateValue = (key, value) => {
        switch(key){
            case 'cardNumber':
                return { key, ...validateCardNumber(value) }
            case 'cardName':
                return { key, ...validateCardName(value) }
            case 'cvc':
                return { key, ...validateCVCNumber(value)}
            case 'monthyValid':
                return { key, ...validateMonthyValid(value)}
            case 'yearValid':
                return { key, ...validateYearValid(value)}
            default:
                return {}
        }
    }

    return {
        cardCredit,
        sucess,
        resetData,
        setCardCredit,
        changeSucess
    }
}

