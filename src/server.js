const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const API_ENDPOINT = 'https://api.yelp.com/v3/businesses';
const API_KEY = '';

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
    headers: {'Authorization': `Bearer ${API_KEY}`},
    params: {
      term: 'Coffee',
      location: 'Amsterdam, NL'
    },
  };

  const response = await axios(requestConfig);
  const result = await response.data;

  res.send(result);
});

app.get("/api/locations/:id", async (req, res) => {
  let id = req.params.id;

  const requestConfig = {
    method: 'get',
    baseURL: `${API_ENDPOINT}/${id}`,
    responseType: 'json',
    headers: {'Authorization': `Bearer ${API_KEY}`},
  };

  try {
    const response = await axios(requestConfig);
    const result = await response.data;
    console.log("response", response.data);
    //  console.log("result", result);
    return res.send(response.data)


  } catch (err) {
    console.log(err)
    return res.send({})
  }
});


const server = app.listen(port, () => {
  const port = server.address().port;
  console.log("App listening at port %s", port);
});


