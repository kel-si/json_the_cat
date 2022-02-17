const request = require('request');
const args = process.argv.slice(2);


request(`https://api.thecatapi.con/v1/breeds/search?q=${args}`, (error, response, body) => {
  if (error) {
    return console.log(error);
  }
  const [data] = JSON.parse(body);
  if (data) {
    console.log("description:", data.description);
  }
  else {
    console.log("This breed does not exist.");
  }
});