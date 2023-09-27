import Button from './Button';
import { FaDeleteLeft } from 'react-icons/fa6';
import { divide, evaluate } from 'mathjs';

const Keyboard = ({
  numbers,
  operations,
  operationValues,
  setOperationValues,
  currentValue,
  setCurrentValue,
}) => {
  const handleNumberClicks = (value) => {
    if (currentValue === '0' && value === '0') return;
    if (currentValue === '0' && value !== '0') return setCurrentValue(value);

    const newCurrentValue = currentValue.concat(value);

    setCurrentValue(newCurrentValue);
  };

  const handleOperationClicks = (op) => {
    let newOperationValues = [];

    if (currentValue.split('.')[1] === '') return;

    if (currentValue === '0') {
      if (
        operationValues[operationValues.length - 1] === '+' ||
        operationValues[operationValues.length - 1] === '-' ||
        operationValues[operationValues.length - 1] === 'x' ||
        operationValues[operationValues.length - 1] === '/'
      ) {
        newOperationValues = [...operationValues];
        newOperationValues[newOperationValues.length - 1] = op;
      } else if (operationValues.length === 0) {
        newOperationValues = [...operationValues, currentValue, op];
      } else {
        newOperationValues = [...operationValues, op];
      }
    } else if (operationValues.length === 1) {
      newOperationValues = [currentValue, op];
    } else {
      newOperationValues = [...operationValues, currentValue, op];
    }

    setOperationValues(newOperationValues);
    setCurrentValue('0');
  };

  const handlePeriodClicks = (period) => {
    if (
      currentValue.charAt(currentValue.length - 1) === '.' ||
      currentValue.split('.').length === 2
    )
      return;

    const newCurrentValue = currentValue.concat(period);

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

    if (currentValue.length === 1) return setCurrentValue('0');

    const newCurrentValue = currentValue.slice(0, currentValue.length - 1);

    setCurrentValue(newCurrentValue);
  };

  const handleEqual = () => {
    const result = evaluate(
      operationValues.join('').concat(currentValue).replace('x', '*')
    );

    setOperationValues([result]);
    setCurrentValue('0');
  };

  return (
    <section>
      {numbers.map((num) => (
        <Button key={num} content={num} action={handleNumberClicks} />
      ))}

      {operations.map((op) => (
        <Button key={op} content={op} action={handleOperationClicks} />
      ))}

      <Button content={'C'} action={handleClear} />
      <Button content={<FaDeleteLeft />} action={handleDelete} />

      <Button content={'.'} action={handlePeriodClicks} />
      <Button content={'%'} action={handlePercentage} />
      <Button content={'='} action={handleEqual} />
    </section>
  );
};

export default Keyboard;
