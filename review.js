const path = require('path')
const express = require('express')

// console.log(__dirname)
// console.log(__filename)
// console.log(path.join(__dirname, '../public'))

const app = express()

// middleware:
const noVisitorDay = function(day) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return (req, res, next) => {
        var today = new Date().getDay(); // index
        if (days[today] === day) {
            res.send(`No visitors on ${day}s, thanks.`);
        }
        next();
    }
}
app.use(noVisitorDay('Tuesday'))

const publicDirPath = path.join(__dirname, '../public')
app.use(express.static(publicDirPath))

// app.get('/', (req, res) => {
//     res.send('<h1>Hello express</h1>')
// })
/*
app.get('/help', (req, res) => {
    res.send([{
        name: 'Brad',
        age: 25
    }, {
        name: 'Ben',
        age: 25
    }])
})

app.get('/about', (req, res) => {
    res.send('<h1>About us</h1>')
})
*/
app.get('/weather', (req, res) => {
    // res.send({
    //     forecast: 'rain',
    //     location: 'Sunnyvale, CA'
    // })
    if (!req.query.location) {
        return res.send({ err: 'Plz provide a location.'})
    }
    res.send({ 
        forecast: 'cloudy',
        location: req.query.location
    })
})

app.get('/products', (req, res) => {
    console.log(req.query.search)
    res.send({
        products: []
    })
})

app.listen(3000, () => {
    console.log('Server running on port 3000')
})

