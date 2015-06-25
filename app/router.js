import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('pokedex');
  this.resource('pokemon', {path: 'pokemon/:pkmn_id'});
  this.resource('user');
  this.resource('map');
  this.resource('users', function() {
    this.resource('new');
  });
  this.route('pokemons');
});

export default Router;
