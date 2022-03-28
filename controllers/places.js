const router = require('express').Router()
const places = require('../models/places')


// GET /new
router.get('/new', (req, res) => {
    res.render('places/new')
  })
  //POST
  router.post('/new', (req, res) => {
      res.send('POST /new')
    })

  //GET INDEX
router.get('/', (req, res) => {
    res.render('places/index', {places})
})
//POST 
router.post('/', (req, res) => {
    console.log(req.body)
    if (!req.body.pic) {
      // Default image if one is not provided
      req.body.pic = 'http://placekitten.com/400/400'
    }
    if (!req.body.city) {
      req.body.city = 'Anytown'
    }
    if (!req.body.state) {
      req.body.state = 'USA'
    }
    places.push(req.body)
    res.redirect('/places')
  })


module.exports = router