const express = require('express')
const path = require('path')



const PORT = 3000

const app = express()


app.use(express.static( path.join(__dirname, '../client') ))
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/Historia', (req, res) => {
  res.render('history')
})

app.listen(PORT)
console.log(`Listening on PORT ${PORT}`);