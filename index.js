require ('dotenv').config();

const express = require('express')
const app = express()
const port = process.env.PORT || 5000

// 1) all movies troute
app.get('/movies', (req, res) => {
  res.send('Movies!')
})

app.get("/movies", movies);



// 2) new movies route


// 3) action movies route



// 4) find movies by id


// app.get('/tvshows', (req, res) => {
//     res.send('TV-SHOWS')
//   })

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})