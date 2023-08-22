const test = [
  {
    name: "Pizza",
    location: "123 street",
  },
  {
    name: "Pasta",
    location: "456 street",
  },
  {
    name: "Mandolino",
    location: "789 street",
  },
];

function getRandomRestaurant(restaurants) {
  return restaurants[Math.floor(Math.random() * restaurants.length)].name;
}

console.log(getRandomRestaurant(test));
