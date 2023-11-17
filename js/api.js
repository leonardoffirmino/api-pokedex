const pokemonName = document.querySelector('.pokemon_name');
const pokemonNumber = document.querySelector('.pokemon_number');
const pokemonImage = document.querySelector('.pokemon_img');
const form = document.querySelector('.form');
const input = document.querySelector('.getPokemon');

const getFetchPokemon = async (pokemon) => {

  const apiResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`);


  if (apiResponse.status === 200) {
    const data = await apiResponse.json();

    return data;
  }



};


const renderPokemon = async (pokemon) => {
  pokemonName.innerHTML = 'Loading.....'

  const data = await getFetchPokemon(pokemon);

  if (data) {
    pokemonNumber.innerHTML = data.id;
    pokemonName.innerHTML = data.name;
    pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];


    input.value = "";
  } else {
    pokemonNumber.innerHTML = '';
    pokemonName.innerHTML = 'Not found item :/';
  }


};




form.addEventListener('submit', (event) => {
  event.preventDefault();

  renderPokemon(input.value);

});

renderPokemon('1');


