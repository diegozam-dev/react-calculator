import Calculator from './components/Calculator.jsx';
import { CalculatorContextProvider } from './context/CalculatorContext.jsx';

const App = () => {
  return (
    <div className="container">
      <CalculatorContextProvider>
        <Calculator />
      </CalculatorContextProvider>
    </div>
  );
};

export default App;
