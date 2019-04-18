const yelp = require('yelp-fusion');

const API_KEY = '';

export const client = yelp.client(API_KEY);

const searchRequest = {
  term: 'Coffee',
  location: 'san francisco, ca'
};

export const search = client.search(searchRequest).then(response => {
  const firstResult = response.jsonBody.businesses[0];
  const prettyJson = JSON.stringify(firstResult, null, 4);
  console.log(prettyJson);
}).catch(e => {
  console.log(e);
});