import express from "express";


const app = express();

const port = 4000;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});



const server = app.listen(port, () => {
  const port = server.address().port;
  console.log("App listening at port %s", port);
});
