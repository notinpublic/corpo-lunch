import { restaurantData } from './restaurant-list.js';

function getRandomRestaurant(restaurants) {
  return restaurants[Math.floor(Math.random() * restaurants.length)].name;
}

console.log(getRandomRestaurant(restaurantData));
