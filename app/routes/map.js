import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var image = "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/004.png";
    var pokeball = "http://www.gifmania.co.uk/Manga-Anime-Animated-Gifs/Animated-Pokemon/Pokeball/pokeball3-17373.gif";
  //
  //   var pokemons = [], returnPokemon = this.store.find('Pokemon');
  //
  //   for(var i = 0; i < returnedPokemon.length; i++) {
  //     pokemons.push(returnedPokemon[i]);
  //   }
  //   Ember.A(
  //     this.store.find('Pokemon')
  //   ]);
  return this.store.find('user')
  }
});
