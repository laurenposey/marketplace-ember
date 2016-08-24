import Ember from 'ember';

export default Ember.Component.extend({
  showProductUpdateForm: false,
  actions: {
    updateProduct(product, params) {
      this.sendAction('updateProduct', product, params);
    },
    delete(product) {
      if(confirm('Are you sure you want to delete this product?')){
        this.sendAction('delete', product);
      }
    }
  }
});
