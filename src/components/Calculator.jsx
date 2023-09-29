import Screen from './Screen';
import Keyboard from './Keyboard';

const Calculator = () => {
  return (
    <div className="calculator p-4 w-80 shadow-md shadow-zinc-400 flex flex-col gap-5 bg-zinc-800">
      <Screen />
      <Keyboard />
    </div>
  );
};

export default Calculator;
