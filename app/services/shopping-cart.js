import Ember from 'ember';

export default Ember.Service.extend({
  items: [],
  currentTotal: 0,

  add(item) {
    this.get('items').pushObject(item);
    this.get('updateTotal')(this);
  },

  
});
