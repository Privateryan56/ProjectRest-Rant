const router = require('express').Router()


// GET /new
router.get('/new', (req, res) => {
    res.render('places/new')
  })
  router.post('/new', (req, res) => {
      res.send('POST /new')
    })

  //GET INDEX
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
router.post('/', (req, res) => {
    console.log(req.body)
    res.send('POST /places')
  })


module.exports = router