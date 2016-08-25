import Ember from 'ember';

export default Ember.Component.extend({
  addNewReview: false,
  actions: {
    showNewReviewForm() {
      this.set('addNewReview', true);
    },
    save() {
      var params = {
        content: this.get('content'),
        author: this.get('author'),
        product: this.get('product'),
        rating: parseInt(this.get('rating'))
      };
      this.set('addNewReview', false);
      this.sendAction('save', params);
    }
  }
});
