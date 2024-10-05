import { useState } from 'react';
import './App.css';
import pokemon from './pockemon.json';
import PropTypes from 'prop-types';

const PokemonRow = ( {pokemon, onSelect} ) => (
  <tr>
    <td>{pokemon.name.english}</td>
    <td>{pokemon.type.join(', ')}</td>
    <td><button onClick={() => onSelect(pokemon)}>Select</button></td>
  </tr>
);

PokemonRow.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.shape({
      english: PropTypes.string,
    }),
    type: PropTypes.arrayOf(PropTypes.string),
  }),
  onSelect: PropTypes.func,
};

const PokemonInfo = ({name, base}) => (
  <div className='selection'>
    <h1>{name.english}</h1>
    <table>
      {Object.keys(base).map((key) => (
        <tr key={key}>
          <td>{key}</td>
          <td>{base[key]}</td>
        </tr>
      ))}
    </table>
  </div>
);

PokemonInfo.propTypes = {
  name: PropTypes.shape({
    english: PropTypes.string,
  }),
  base: PropTypes.shape({
    HP: PropTypes.number.isRequired,
    Attack: PropTypes.number.isRequired,
    Defence: PropTypes.number.isRequired,
    "Sp. Attack": PropTypes.number.isRequired,
    "Sp. Defence": PropTypes.number.isRequired,
    Speed: PropTypes.number.isRequired,
  }),
}

function App() {

  const [filter, setFilter] = useState("");
  const [selectedItem, setSelectedItem] = useState();

  return (
  
      <div
      style={{
        margin: "auto",
        width: 800,
        paddingTop: 30,
      }}
      >
        <h1 className="title">Pokemon Search</h1>
        <div>
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
              <PokemonRow pokemon={pokemon} key={pokemon.id} onSelect={(pokemon) => setSelectedItem(pokemon)}></PokemonRow>
            ))}
          </tbody>
        </table>
        </div>
        {selectedItem && <PokemonInfo {...selectedItem} />}
      </div>
    
  );
}

export default App;
