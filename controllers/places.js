const router = require('express').Router()
const places = require('../models/places.js')

//INDEX route
router.get('/', (req, res) => {
  res.render('places/index', {places})
})

//NEW Route
router.get('/new', (req,res)=>{
  res.render('places/new')
})

//DELETE Route
router.delete('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    places.splice(req.params.id, 1)
    res.redirect('/places')
  }
})

//POST Route
router.post('/', (req, res) => {
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


//SHOW route
router.get('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    res.render('places/show', { place: places[id], id })
  }
})

//EDIT Route Page
router.get('/:id/edit', (req,res)=>{
  let id = Number(req.params.id)
  if (isNaN(id)){
    res.render('error404')
  } else if (!places[id]) {
    res.render('error404')
  } else {
    res.render('places/edit', { place: places[id], id })
  }
})

//EDIT Route
router.put('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
      res.render('error404')
  }
  else if (!places[id]) {
      res.render('error404')
  }
  else {
      // Dig into req.body and make sure data is valid
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

      // Save the new data into places[id]
      places[id] = req.body
      res.redirect(`/places/${id}`)
  }
})

module.exports = router


module.exports = router