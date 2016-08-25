import Ember from 'ember';

export function rating(params/*, hash*/) {
  var productRating = params[0].get('rating');

  if (productRating === 5) {
    return '*****';
  } else if (productRating === 4) {
    return '****';
  } else if (productRating === 3) {
    return '***';
  } else if (productRating === 2) {
    return '**';
  } else if (productRating === 1) {
    return '*';
  }
}

export default Ember.Helper.helper(rating);
