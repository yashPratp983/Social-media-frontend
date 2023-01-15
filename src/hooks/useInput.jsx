import React, { useState } from "react";
const useInput = (validateInput) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const isValid = validateInput(enteredValue);

    const changeHandler = (event) => {
        setEnteredValue(event.target.value);
        setIsTouched(false);
        console.log(event.target.value)
    }

    const inputBlurHandler = () => {
        setIsTouched(true);
    }

    const reset = () => {
        setEnteredValue('');
        setIsTouched(false);
    }

    const isInvalid = !isValid && isTouched;

    return {
        enteredValue,
        isValid,
        changeHandler,
        inputBlurHandler,
        isInvalid,
        reset
    }
}

export default useInput;