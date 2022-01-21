require('dotenv').config();
const cors = require('cors');

const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const { movies, actionMovies, newMovies, getMovie } = require('./controllers/movies')
const { newTvShows, actionTvShows, tvShows, getTvShow, getTvShowEpisode, getShowSeason } = require('./controllers/tvShows')

app.use(cors());

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

app.get("/tv-shows", tvShows);

// 2) action tv shows
app.get("/action-tv-shows", actionTvShows);

// 3) new tv shows
app.get("/new-tv-shows", newTvShows);

// 4) find tv shows by ID
app.get("/tv-show/:tvShowId", getTvShow);

// 5) find episode by ID => /:tvShowId/:seasonId/:episodeId
app.get("/tv-show-episode/:tvShowId/:seasonId/:episodeId", getTvShowEpisode)

app.get("/tv-show-season/:tvShowId/:seasonId", getShowSeason)

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})