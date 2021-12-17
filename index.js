require ('dotenv').config();

const express = require('express')
const app = express()
const port = process.env.PORT || 5000

app.get('/movies', (req, res) => {
  res.send('Movies')
})

app.get('/tvshows', (req, res) => {
    res.send('TV-SHOWS')
  })

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})