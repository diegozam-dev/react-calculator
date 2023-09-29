import Screen from './Screen';
import Keyboard from './Keyboard';

const Calculator = () => {
  return (
    <div className="calculator p-4 w-80 shadow-md shadow-zinc-400 flex flex-col items-center gap-5 bg-zinc-800 max-sm:shadow-none max-sm:w-full">
      <Screen />
      <Keyboard />
    </div>
  );
};

export default Calculator;
