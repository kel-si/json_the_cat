const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, resp, body) => {
    if (error) {
      return callback(error, null);
    }
    const data = JSON.parse(body);
    const breed = data[0];
    if (breed) {
      callback(null, breed.description);
    } else {
      callback('Breed Not Found');
    }
  });
};

module.exports = { fetchBreedDescription };