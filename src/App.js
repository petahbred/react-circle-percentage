import './App.css';
import PercentageCircle from './lib/components/PercentageCircle';

function App() {
  return (
    <div>
      <PercentageCircle percentage={90} textColor='white'></PercentageCircle>
      <PercentageCircle percentage={75} textColor='white'></PercentageCircle>
      <PercentageCircle percentage={65} textColor='white'></PercentageCircle>
      <PercentageCircle percentage={30} textColor='white'></PercentageCircle>
    </div>
  );
}

export default App;
