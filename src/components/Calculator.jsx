import { useState } from 'react';
import Screen from './Screen';
import Keyboard from './Keyboard';

const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const operations = ['+', '-', 'x', '/'];

const Calculator = () => {
  const [operationValues, setOperationValues] = useState([]);
  const [currentValue, setCurrentValue] = useState('0');

  return (
    <div>
      <Screen operationValues={operationValues} currentValue={currentValue} />
      <Keyboard
        numbers={numbers}
        operations={operations}
        operationValues={operationValues}
        setOperationValues={setOperationValues}
        currentValue={currentValue}
        setCurrentValue={setCurrentValue}
      />
    </div>
  );
};

export default Calculator;
