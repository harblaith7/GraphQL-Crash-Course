import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav/Nav';
import MainHero from './components/MainHero/MainHero';

function App() {
  return (
    <div className="App">
      <Nav />
      <MainHero />
      <div className="card-display">

      </div>
    </div>
  );
}

export default App;
