const pokemonName = document.querySelector('.pokemon_name');
const pokemonNumber = document.querySelector('.pokemon_number');
const pokemonImage = document.querySelector('.pokemon_img');

const getFetchPokemon = async (pokemon) => {

  const apiResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

  const data = await apiResponse.json();

  return data;

};


const renderPokemon = async (pokemon) => {
  const data = await getFetchPokemon(pokemon);

  pokemonNumber.innerHTML = data.id;
  pokemonName.innerHTML = data.name;
  pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
};



renderPokemon('25');



