require('dotenv').config()

var express = require('express')
var cors = require('cors')
var app = express()
const PlayerData = require('./PlayerData') 
var port = process.env.PORT

const playerData = new PlayerData();

// as you can see from this structure the players are on hole {1, 2, 3, 4}
const players = {
    graph: playerData.GetPlayers()
}


app.use(cors())

app.use(express.static('public'))

app.get('/api/players', (request, response) => {
    console.log("players...", JSON.stringify(players))
    response.setHeader('Content-Type', 'application/json');
    response.send(JSON.stringify(players))
})

app.get('/', (request, response) => {
    console.log("players...", JSON.stringify(players))
    response.setHeader('Content-Type', 'text/html');
    response.send("<div>Hello there, welcome</div>")
})


app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})