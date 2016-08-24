import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),


  totalCost: Ember.computed('shoppingCart.items.[]', function(){ //shopping Cart is the thing its observing
    var total = 0;
    this.get('shoppingCart.items').forEach(function(item) {
      total += parseInt(item.get('price'));
    });
    return total;
  })

});
