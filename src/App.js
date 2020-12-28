
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import PokemonList from './components/pokemon/PokemonList.js';
import PokemonDetails from './components/pokemon/PokemonDetails';
import Evolve from './components/pokemon/Evolve';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchBar from './components/pokemon/SearchBar';
import { useState } from 'react';

function App() {

  const [keyword, setKeyword] = useState('');





  return (
    <Router basename={window.location.pathname || ''}>
      <Container className='App' style={{ padding: 0 }}>
        <SearchBar keyword={keyword} setKeyword={setKeyword} />
        <Switch>
          <Route path='/' exact component={PokemonList} />
          <Route path='/pokemon/:name' component={PokemonDetails} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
