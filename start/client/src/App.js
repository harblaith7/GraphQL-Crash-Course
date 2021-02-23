import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav/Nav';
import { Switch, Route, BrowserRouter } from "react-router-dom"
import LandingPage from './pages/LandingPage';
import CategoryPage from './pages/CategoryPage';
import AnimalPage from './pages/AnimalPage/AnimalPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Nav />
          <Switch>
            <Route exact strict path="/" component={LandingPage}/>
            <Route exact strict path="/products/:slug" component={CategoryPage}/>
            <Route exact strict path="/product/:slug" component={AnimalPage}/>
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
