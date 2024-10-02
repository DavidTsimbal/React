import { useState } from 'react';
import './App.css';
import pokemon from './pockemon.json';
import PropTypes from 'prop-types';

const PokemonRow = ( {pokemon} ) => (
  <tr>
    <td>{pokemon.name.english}</td>
    <td>{pokemon.type.join(', ')}</td>
  </tr>
);

PokemonRow.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.shape({
      english: PropTypes.string,
    }),
    type: PropTypes.arrayOf(PropTypes.string),
  }),
}

function App() {

  const [filter, setFilter] = useState("");

 

  return (
  
      <div
      style={{
        margin: "auto",
        width: 800,
        paddingTop: 30,
      }}
      >
        <h1 className="title">Pokemon Search</h1>
        <input 
          type="text" 
          placeholder='search' 
          value={filter}
          onChange={(evt) => setFilter(evt.target.value)}
        />
        <table width="100%">
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {  pokemon.filter((pokemon) => pokemon.name.english.toLowerCase().includes(filter.toLowerCase())).map((pokemon) => (
              <PokemonRow pokemon={pokemon} key={pokemon.id}></PokemonRow>
            ))}
          </tbody>
        </table>
      </div>
    
  );
}

export default App;
