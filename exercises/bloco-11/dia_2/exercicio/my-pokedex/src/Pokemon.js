import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render () {
    const pokemon = this.props.pokemon;
    return (
      <div className="pokemon">
        <div>
          <p>{pokemon.name}</p>
          <p>{pokemon.type}</p>
          <p>{`Average weight: ${pokemon.averageWeight.value} ${pokemon.averageWeight.measurementUnit}`}</p>
        </div>
        <div>
          <img src={pokemon.image} alt={pokemon.name}></img>
        </div>
        
      </div>
    );
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      measurementUnit: PropTypes.string,
      value: PropTypes.number,
    }),
    image: PropTypes.string,
  }).isRequired,
};

export default Pokemon;