import { createContext, useState } from 'react';
import { divide, evaluate } from 'mathjs';

export const CalculatorContext = createContext(null);

const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const operations = ['+', '-', 'x', '/'];

export const CalculatorContextProvider = (props) => {
  const [operationValues, setOperationValues] = useState([]);
  const [currentValue, setCurrentValue] = useState('0');

  const lastOperationValue = operationValues[operationValues.length - 1];
  const lenghtOperationValues = operationValues.length;

  const handleNumberClicks = (value) => {
    let newCurrentValue = value;

    if (currentValue === '0') {
      if (newCurrentValue === '0') return;
    } else if (lastOperationValue === '=') {
      // we will perform a new calculation
      // we clear the "operationValues" and update the "currentValue" with the new value
      setOperationValues([]);
    } else {
      newCurrentValue = currentValue.concat(value);
    }

    setCurrentValue(newCurrentValue);
  };

  const handleOperationClicks = (op) => {
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

  const handlePeriodClicks = (period) => {
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

  const handlePercentage = () => {
    if (currentValue === '0') return;

    const newCurrentValue = divide(currentValue, 100).toString();

    setCurrentValue(newCurrentValue);
  };

  const handleClear = () => {
    setCurrentValue('0');
    setOperationValues([]);
  };

  const handleDelete = () => {
    if (currentValue === '0') return;

    let newCurrentValue;

    if (currentValue.length === 1) {
      newCurrentValue = '0';
    } else {
      newCurrentValue = currentValue.slice(0, currentValue.length - 1);
    }

    setCurrentValue(newCurrentValue);
  };

  const handleEqual = () => {
    let result = '0';
    let newOperationValues = operationValues;

    if (lenghtOperationValues === 0) {
      newOperationValues = [currentValue];
    }

    if (operations.some((op) => op === lastOperationValue)) {
      result = evaluate(
        newOperationValues.join('').concat(currentValue).replaceAll('x', '*')
      );

      newOperationValues.push(currentValue, '=');
    }

    if (lastOperationValue === '=') {
      newOperationValues.pop(); // Delete '='
      newOperationValues[0] = currentValue; // Change first element

      result = evaluate(newOperationValues.join('').replaceAll('x', '*'));

      newOperationValues.push('=');
    }

    setOperationValues(newOperationValues);
    setCurrentValue(result.toString());
  };

  return (
    <CalculatorContext.Provider
      value={{
        numbers,
        operations,
        operationValues,
        currentValue,
        handleNumberClicks,
        handleOperationClicks,
        handlePercentage,
        handlePeriodClicks,
        handleClear,
        handleDelete,
        handleEqual,
      }}
    >
      {props.children}
    </CalculatorContext.Provider>
  );
};
