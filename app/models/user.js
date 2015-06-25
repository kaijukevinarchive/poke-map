import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  icon: DS.attr('string'),
  lat: DS.attr('number'),
  lng: DS.attr('number'),
  pokemons: DS.hasMany('pokemon', {async: true})
});
