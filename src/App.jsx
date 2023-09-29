import Calculator from './components/Calculator.jsx';
import { CalculatorContextProvider } from './context/CalculatorContext.jsx';

const App = () => {
  return (
    <div className="container max-w-none h-screen bg-zinc-950 flex flex-col justify-center items-center gap-10">
      <h1 className="font-poppins font-bold text-4xl text-white">
        {'</> Calculator'}
      </h1>
      <CalculatorContextProvider>
        <Calculator />
      </CalculatorContextProvider>
    </div>
  );
};

export default App;
