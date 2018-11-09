const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')
require('dotenv').config()
import { HashRouter } from 'react-router-dom'

var app = express()

import App from './App'

ReactDOM.render(

    <HashRouter>
        <App />
    </HashRouter>, document.getElementById('root')

)

const controller = require('./controller')



massive( process.env.CONNECTION_STRING ).then( dbInstance => {
    app.set('db', dbInstance)
    console.log('yo, db is connected')
}).catch(err => {
    console.log(err)
})

app.get('/api/houses', controller.getHouses)
app.delete('api/remove', controller.removeHouse)



const port = 4000
app.listen( port, () => {console.log(`Server listening on port ${port}.`)})