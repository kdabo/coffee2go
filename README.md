# Coffee2go

Coffee2go is a single page application built using React, Typescript, Redux Saga and React Router. 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine.

### Setup

Clone, setup, and run the project

- `git clone https://github.com/kdabo/coffee2go.git`
- `cd coffee2go`
- `npm install`

To run the project you have to generate API KEYS from:

1. https://www.yelp.nl/developers
2. https://developers.google.com/maps/documentation/

Once you have the keys, create `env.sh` file in the project root with following variables:

export YELP_API_KEY='YOUR_YELP_API_KEY'
export GOOGLE_MAPS_API_KEY='YOUR_GOOGLE_MAPS_API_KEY'

You are ready to run the project:

- `npm start`

Access the project on port `localhost:3000/cafes`
