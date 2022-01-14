require('dotenv').config();

const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const { movies, actionMovies, newMovies, getMovie } = require('./controllers/movies')

// 1) all movies route
app.get("/movies", movies);


// 2) new movies route
app.get("/new-movies", newMovies);

// 3) action movies route
app.get("/action-movies", actionMovies);


// 4) find movies by id
app.get("/movie/:id", getMovie);


// app.get('/tvshows', (req, res) => {
//     res.send('TV-SHOWS')
//   })


// 1) all tv shows

// 2) action tv shows

// 3) new tv shows

// 4) find tv shows by ID

// 5) find episode by ID => /:tvShowId/:seasonId/:episodeId



app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})