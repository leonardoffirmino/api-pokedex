const pokemonName = document.querySelector('.pokemon_name');
const pokemonNumber = document.querySelector('.pokemon_number');
const pokemonImage = document.querySelector('.pokemon_img');
const form = document.querySelector('.form');
const input = document.querySelector('.getPokemon');
const buttonPrev = document.querySelector('.btn-prev');
const buttonNext = document.querySelector('.btn-next');



let searchPokemon = 1;

const getFetchPokemon = async (pokemon) => {

  const apiResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);


  if (apiResponse.status === 200) {
    const data = await apiResponse.json();

    return data;
  }



};


const renderPokemon = async (pokemon) => {
  pokemonName.innerHTML = 'Loading.....'

  const data = await getFetchPokemon(pokemon);

  if (data) {
    pokemonImage.style.display = 'block';
    pokemonNumber.innerHTML = data.id;
    pokemonName.innerHTML = data.name;
    pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];


    input.value = "";
    searchPokemon = data.id;
  } else {
    pokemonNumber.innerHTML = '';
    pokemonName.innerHTML = 'Not found item :/';
    pokemonImage.style.display = 'none';
  }


};




form.addEventListener('submit', (event) => {
  event.preventDefault();

  renderPokemon(input.value.toLowerCase());

});


buttonPrev.addEventListener('click', () => {
  if (searchPokemon > 1) {
    searchPokemon -= 1;
    renderPokemon(searchPokemon);
  }

});

buttonNext.addEventListener('click', () => {
  searchPokemon += 1;
  renderPokemon(searchPokemon);
})

renderPokemon(searchPokemon);


