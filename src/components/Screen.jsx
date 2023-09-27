import { useContext } from 'react';
import { CalculatorContext } from '../context/CalculatorContext';

const Screen = () => {
  const { operationValues, currentValue } = useContext(CalculatorContext);

  /* 
    - returns the calculator screen which has two parts.
    - the screen__operation-values shows the complete operation and then pressing the '=' shows the result.
    - the screen__current-value shows the current value you want to operate on.
  */
  return (
    <div className="calculator__screen">
      <input
        className="screen__operation-values"
        type="text"
        value={operationValues.join(' ')}
        disabled
      />
      <input
        className="screen__current-value"
        type="text"
        value={currentValue}
        disabled
      />
    </div>
  );
};

export default Screen;
