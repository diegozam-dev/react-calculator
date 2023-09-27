import { useContext } from 'react';
import Button from './Button';
import { CalculatorContext } from '../context/CalculatorContext';
import { FaDeleteLeft } from 'react-icons/fa6';

const Keyboard = () => {
  const {
    numbers,
    operations,
    handleNumberClicks,
    handleOperationClicks,
    handlePercentage,
    handlePeriodClicks,
    handleClear,
    handleDelete,
    handleEqual,
  } = useContext(CalculatorContext);

  /*
    - returns the entire calculator keyboard.
  */
  return (
    <section className="calculator__keyboard">
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
