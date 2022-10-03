export const validateCardNumber = (value) => {
    let action = {};
    value = limitedString(value, 16).match(/.{1,4}/g)?.join(" ") || "";

    action = isBlank(value, action)

    action = hasCaracterAlpha(value, action)

    action.value = value

    return action
}

export const validateCardName = (value) => {
   return { value, ...isBlank(value)}
}

export const validateCVCNumber = (value) => {
    let action = {}
    value = limitedString(value, 3);

    action = isBlank(value);

    if(value?.length < 3){
        action = {
            hasError: true,
            msgError: 'Must be 3 numbers'
        }
    }

    action = hasCaracterAlpha(value, action)

    action.value = value;

    return action;
}

const validateDate = (date, value, msgError, customValidate) => {
    let action = {}
    value = limitedString(value, 2);
    
    action = isBlank(value);

    if(date > value) {
        action.hasError = true;
        action.msgError = msgError;
    }

    customValidate && customValidate(action);

    action.value = value

    return action
}

export const validateMonthyValid = (value) => {
    const { monthy } = currentDate();
    return validateDate(monthy, value, "Monthy must be higher than actual", (action) => {
        if(value > 12) {
            action.hasError = true;
            action.msgError = "Invalid value";
        }
    } );
}

export const validateYearValid = (value) => {
    const { year } = currentDate();
    return validateDate(year, value, "Year must be higher than actual" );
}

const isBlank = (value, action = {}) => {
    if(value == ""){
        return {
            hasError: true,
            msgError: 'Cant be blank!'
        }
    }

    return { ...action }
}

const hasCaracterAlpha = (value, action = {}) => {
    if(value.match(/.[a-zA-Z]/g)?.length > 0){
        return {
            hasError: true,
            msgError: 'Not allow caracter [A-z]'
        } 
    }

    return { ...action }
}

const currentDate = () => {
    const currentDate = new Date();

    const monthy = currentDate.getMonth() + 1;
    const fullYear = String(currentDate.getFullYear());

    const year = fullYear?.slice(2, 4)

    return { monthy, year }
}

const limitedString = (value, maxCaracter) => {
  return value.replace(/\s/g, "").substr(0, maxCaracter) || ""

}