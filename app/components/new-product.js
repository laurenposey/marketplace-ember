import Ember from 'ember';

export default Ember.Component.extend({
  addNewProduct: false,
  actions: {
    productFormShow() {
      this.set('addNewProduct', true);
    },

    saveProduct() {
      var params = {
        name: this.get('name'),
        price: this.get('price'),
        description: this.get('description'),
        img: this.get('img'),
      };
      this.set('addNewProduct', false);
      this.sendAction('saveProduct', params);
    }
  }
});
