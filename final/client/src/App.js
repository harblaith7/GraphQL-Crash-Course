import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav/Nav';
import { Switch, Route, BrowserRouter } from "react-router-dom"
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import LandingPage from './pages/LandingPage';
import CategoryPage from './pages/CategoryPage';
import AnimalPage from './pages/AnimalPage/AnimalPage';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache()
});

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ApolloProvider client={client}>
          <Nav />
          <Switch>
            <Route exact strict path="/" component={LandingPage}/>
            <Route exact strict path="/products/:slug" component={CategoryPage}/>
            <Route exact strict path="/product/:slug" component={AnimalPage}/>
          </Switch>
        </ApolloProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
