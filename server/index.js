const express = require('express');
const fetch = require('node-fetch');
require('dotenv').config();

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/movies/currently_playing', (req, res) => {
    fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.APIKEY}`)
        .then(res => res.json())
        .then(json => res.send(json));
})



app.listen(8000, () => {
    console.log('Node.js listening on port ' + 8000)
});