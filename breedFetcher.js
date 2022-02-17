const request = require('request');
const args = process.argv.slice(2);


request('https://api.thecatapi.com/v1/breeds/search?q=sib', (error, response, body) => {
  // console.log("type of body:", typeof body);
  const data = JSON.parse(body);
  // console.log("data:", data);
  // console.log("type of data:", typeof data);

  for (key in data) {
    console.log("description:", data[key].description);
  }
});


//Endpoint that will return cat breed results (empty array):
// https://api.thecatapi.com/v1/breeds/search



//For Siberian (array with results):
//https://api.thecatapi.com/v1/breeds/search?q=sib 