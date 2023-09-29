import { useContext } from 'react';
import Input from './Input';
import { CalculatorContext } from '../context/CalculatorContext';

const Screen = () => {
  const { operationValues, currentValue } = useContext(CalculatorContext);

  /* 
    - returns the calculator screen which has two parts.
    - the screen__operation-values shows the complete operation and then pressing the '=' shows the result.
    - the screen__current-value shows the current value you want to operate on.
  */
  return (
    <div className="calculator__screen w-full flex flex-col">
      <Input
        value={operationValues.join(' ')}
        className={'text-base text-zinc-700'}
      />
      <Input value={currentValue} className={'text-xl text-zinc-900'} />
    </div>
  );
};

export default Screen;
