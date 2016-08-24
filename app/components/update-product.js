import Ember from 'ember';

export default Ember.Component.extend({
  showProductUpdateForm: false,
  actions: {
    updateFormShow(){
      this.set('showProductUpdateForm', true);
    },
    updateProduct(product) {
      var params = {
        name: this.get('name'),
        price: this.get('price'),
        description: this.get('description'),
        img: this.get('img'),
      };
      this.set('showProductUpdateForm', false);
      this.sendAction('updateProduct', product, params);
    }
  }
});
