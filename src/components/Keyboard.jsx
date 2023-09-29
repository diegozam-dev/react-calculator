import { useContext } from 'react';
import Button from './Button';
import { CalculatorContext } from '../context/CalculatorContext';
import { FaDeleteLeft } from 'react-icons/fa6';

const Keyboard = () => {
  const {
    numbers,
    operations,
    handleNumberClick,
    handleOperationClick,
    handlePercentageClick,
    handlePeriodClick,
    handleClearClick,
    handleDeleteClick,
    handleEqualClick,
  } = useContext(CalculatorContext);

  /*
    - returns the entire calculator keyboard.
  */
  return (
    <section className="calculator__keyboard w-full max-w-xs grid grid-cols-5 gap-2">
      {numbers.map((num) => (
        <Button
          key={num}
          content={num}
          action={handleNumberClick}
          className={
            'bg-zinc-600 text-white hover:bg-zinc-700 active:bg-zinc-600 max-sm:hover:bg-zinc-600'
          }
        />
      ))}

      <Button
        content={'0'}
        action={handleNumberClick}
        className={
          'col-start-2 row-start-4 row-end-5 bg-zinc-600 text-white hover:bg-zinc-700 active:bg-zinc-600 max-sm:hover:bg-zinc-600'
        }
      />

      <div className="operators col-start-4 col-end-6 row-start-2 row-end-4 grid grid-cols-2 gap-2">
        {operations.map((op) => (
          <Button
            key={op}
            content={op}
            action={handleOperationClick}
            className={
              'bg-zinc-700 text-white hover:bg-zinc-600 active:bg-zinc-700 max-sm:hover:bg-zinc-700'
            }
          />
        ))}
      </div>

      <Button
        content={'C'}
        action={handleClearClick}
        className={
          'col-start-4 col-end-5 row-start-1 row-end-2 bg-zinc-700 text-white hover:bg-zinc-600 active:bg-zinc-700 max-sm:hover:bg-zinc-700'
        }
      />
      <Button
        content={<FaDeleteLeft />}
        action={handleDeleteClick}
        className={
          'col-start-5 col-end-6 row-start-1 row-end-2 bg-zinc-700 text-white hover:bg-zinc-600 active:bg-zinc-700 max-sm:hover:bg-zinc-700'
        }
      />

      <Button
        content={'.'}
        action={handlePeriodClick}
        className={
          'bg-zinc-600 text-white hover:bg-zinc-700 active:bg-zinc-600 max-sm:hover:bg-zinc-600'
        }
      />
      <Button
        content={'%'}
        action={handlePercentageClick}
        className={
          'bg-zinc-600 text-white hover:bg-zinc-700 active:bg-zinc-600 max-sm:hover:bg-zinc-600'
        }
      />
      <Button
        content={'='}
        action={handleEqualClick}
        className={
          'col-start-4 col-end-6 row-start-4 bg-cyan-700 text-zinc-950 hover:bg-cyan-600 active:bg-cyan-700 max-sm:hover:bg-cyan-700'
        }
      />
    </section>
  );
};

export default Keyboard;
