
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import PokemonList from './components/pokemon/PokemonList.js';
import PokemonDetails from './components/pokemon/PokemonDetails';
import Evolve from './components/pokemon/Evolve';
import { Container } from 'react-bootstrap';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import SearchBar from './components/pokemon/SearchBar';
import { useState } from 'react';

function App() {

  const [keyword, setKeyword] = useState('');
  const [pokemons, setPokemons] = useState([]);
  const [pokemonsArray, setPokemonsArray] = useState([]);
  const [loadMore, setLoadMore] = useState(true);




  return (
    <Router>
      <SearchBar pokemons={pokemons} setPokemons={setPokemons} keyword={keyword} setKeyword={setKeyword} pokemonsArray={pokemonsArray} setPokemonsArray={setPokemonsArray} loadMore={loadMore} setLoadMore={setLoadMore} />
      <Switch>
        <Route exact path='/' render={(props) => <PokemonList pokemons={pokemons} setPokemons={setPokemons} setKeyword={setKeyword} pokemonsArray={pokemonsArray} setPokemonsArray={setPokemonsArray} loadMore={loadMore} setLoadMore={setLoadMore} />} />
        <Route exact path='/pokemon/:name' render={(props) => <PokemonDetails {...props} />} />
      </Switch>
    </Router>
  );
}

export default App;
