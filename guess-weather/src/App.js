import logo from './logo.svg';
import './App.css';
import Results from './component/Results'
import Weather from './component/Weather'

function App() {
  return (
    <div className="App">
      <Weather />
        <Results />
    </div>
  );
}

export default App;
