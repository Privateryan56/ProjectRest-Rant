const router = require('express').Router()

router.get('/new', (req, res) => {
    res.render('places/new')
  })

router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/thaifood.jpg',
    }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/ricardo cat.jpg'
    }, {
        name: 'Placeholder',
        city: 'Placeholder',
        state: 'Placeholder',
        cuisines: 'Placeholder',
        pic: 'https://placekitten.com/250/250'
    }]
    res.render('places/index', {places})
})


module.exports = router