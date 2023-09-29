import { createContext, useState } from 'react';
import { divide, evaluate } from 'mathjs';

export const CalculatorContext = createContext(null);

const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
const operations = ['+', '-', 'x', '/'];

export const CalculatorContextProvider = (props) => {
  const [operationValues, setOperationValues] = useState([]);
  const [currentValue, setCurrentValue] = useState('0');

  const lastOperationValue = operationValues[operationValues.length - 1];
  const lenghtOperationValues = operationValues.length;

  const handleNumberClick = (value) => {
    let newCurrentValue = value;

    if (lastOperationValue === '=') {
      // we will do a new calculation
      // we clear the "operationValues" and update the "currentValue" with the new value
      setOperationValues([]);
      return setCurrentValue(newCurrentValue);
    }

    if (currentValue === '0') {
      if (newCurrentValue === '0') return;
    } else {
      newCurrentValue = currentValue.concat(value);
    }

    setCurrentValue(newCurrentValue);
  };

  const handleOperationClick = (op) => {
    let newCurrentValue = currentValue;
    let newOperationValues = [];

    // if "currentValue" is an incomplete decimal we keep the integer portion
    if (newCurrentValue.split('.')[1] === '') {
      newCurrentValue = newCurrentValue.split('.', 1);
    }

    if (lenghtOperationValues === 0 || lastOperationValue === '=') {
      newOperationValues = [newCurrentValue, op];
    } else if (newCurrentValue === '0') {
      // if we are operating and the "currentValue" is "0" we update the operator
      newOperationValues = [...operationValues];
      newOperationValues[lenghtOperationValues - 1] = op;
    } else {
      newOperationValues = [...operationValues, newCurrentValue, op];
    }

    setOperationValues(newOperationValues);
    setCurrentValue('0');
  };

  const handlePeriodClick = (period) => {
    let newCurrentValue;

    if (lastOperationValue === '=') {
      newCurrentValue = '0.';
      setOperationValues([]);
    } else if (currentValue.includes('.')) {
      return;
    } else {
      newCurrentValue = currentValue.concat(period);
    }

    setCurrentValue(newCurrentValue);
  };

  const handlePercentageClick = () => {
    if (currentValue === '0') return;

    const newCurrentValue = divide(currentValue, 100).toString();

    setCurrentValue(newCurrentValue);
  };

  const handleClearClick = () => {
    setCurrentValue('0');
    setOperationValues([]);
  };

  const handleDeleteClick = () => {
    if (currentValue === '0') return;

    let newCurrentValue;

    if (currentValue.length === 1) {
      newCurrentValue = '0';
    } else {
      newCurrentValue = currentValue.slice(0, currentValue.length - 1);
    }

    setCurrentValue(newCurrentValue);
  };

  const handleEqualClick = () => {
    let result = '0';
    let newOperationValues = operationValues;
    let newCurrentValue = currentValue;

    if (newCurrentValue.split('.')[1] === '') {
      newCurrentValue = newCurrentValue.split('.', 1);
    }

    if (lenghtOperationValues === 0 || lastOperationValue === '=') {
      newOperationValues = [newCurrentValue];
      result = newCurrentValue;
    }

    if (operations.some((op) => op === lastOperationValue)) {
      result = evaluate(
        newOperationValues.join('').concat(newCurrentValue).replaceAll('x', '*')
      );

      newOperationValues.push(newCurrentValue);
    }

    setOperationValues([...newOperationValues, '=']);
    setCurrentValue(result.toString());
  };

  return (
    <CalculatorContext.Provider
      value={{
        numbers,
        operations,
        operationValues,
        currentValue,
        handleNumberClick,
        handleOperationClick,
        handlePercentageClick,
        handlePeriodClick,
        handleClearClick,
        handleDeleteClick,
        handleEqualClick,
      }}
    >
      {props.children}
    </CalculatorContext.Provider>
  );
};
