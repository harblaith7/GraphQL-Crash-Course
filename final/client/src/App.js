import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav/Nav';
import MainHero from './components/MainHero/MainHero';
import Card from "./components/Card/Card"
import CardDisplay from './components/CardDisplay/CardDisplay';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache()
});

function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <Nav />
        <MainHero />
        <CardDisplay />
      </ApolloProvider>
    </div>
  );
}

export default App;
