const express = require('express');
const fetch = require('node-fetch');
require('dotenv').config();

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/movies/currently_playing', async (req, res) => {
    let { page } = req.query;
    const pageInt = parseInt(page);
    // Ensure page conforms to API restrictions 
    page = pageInt < 1 || pageInt > 1000 ? 1 : page;

    const movieResponse = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.APIKEY}&page=${page}`);
    const currentlyPlaying = await movieResponse.json();
    res.json(currentlyPlaying);
});

app.get('/movies/search', async (req, res) => {
    let { page, query } = req.query;

    const pageInt = parseInt(page);
    // Ensure page conforms to API restrictions 
    page = pageInt < 1 || pageInt > 1000 ? 1 : page;

    const movieResponse = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.APIKEY}&query=${query}&page=${page}`);
    const search = await movieResponse.json();
    res.json(search);
});

app.listen(8000, () => {
    console.log('Node.js listening on port ' + 8000)
});