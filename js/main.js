let beers = [];
const url = 'https://api.brewerydb.com/v2/beers?key=' + key;

fetch(url, {
  mode: 'cors',
}) 
  .then(res => res.json())
  .then(res => {
    beers = res.results;
    render();
    console.log(res);
  })

  .catch(err => console.log(err));
