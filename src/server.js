const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const YELP_API_KEY = process.env.YELP_API_KEY;
const API_ENDPOINT = 'https://api.yelp.com/v3/businesses';

const port = 4000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("/api/locations", async (req, res) => {
  const requestConfig = {
    method: 'get',
    baseURL: `${API_ENDPOINT}/search`,
    responseType: 'json',
    headers: {'Authorization': `Bearer ${YELP_API_KEY}`},
    params: {
      term: 'Coffee',
      location: 'Amsterdam, NL'
    },
  };

  try {
    const response = await axios(requestConfig);
    const result = await response.data;
    res.send(result);
  } catch(err) {
    // console.log(err);
    res.send({})
  }
});

app.get("/api/nearby", async (req, res) => {
  let latitude = req.query.latitude;
  let longitude = req.query.longitude;



  const requestConfig = {
    method: 'get',
    baseURL: `${API_ENDPOINT}/search`,
    responseType: 'json',
    headers: {'Authorization': `Bearer ${YELP_API_KEY}`},
    params: {
      latitude: latitude,
      longitude: longitude
    },
};

  try {
    const response = await axios(requestConfig);
    const result = await response.data;
    console.log(response.status)
    res.send(result);
  } catch(err) {
    console.log(err.response.data.error);
    res.send({})
  }
});

app.get("/api/locations/:id", async (req, res) => {
  let id = req.params.id;

  const requestConfig = {
    method: 'get',
    baseURL: `${API_ENDPOINT}/${id}`,
    responseType: 'json',
    headers: {'Authorization': `Bearer ${YELP_API_KEY}`},
  };

  try {
    const response = await axios(requestConfig);
    const result = await response.data;
    return res.send(result)
  } catch (err) {
    // console.log(err);
    return res.send({})
  }
});

const server = app.listen(port, () => {
  const port = server.address().port;
  console.log("App listening at port %s", port);
});
