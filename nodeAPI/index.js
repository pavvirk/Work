

const express = require('express');
const axios = require('axios')
const app = express();
const port =8080;

  const headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    };


app.get('/hi', (req, res) => 

res.json('Hello node API Test!'))

app.post('/posttest', (req, res) => 

res.json('Hello node post API Test!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

