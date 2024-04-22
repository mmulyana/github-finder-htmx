const express = require('express')

const app = express()

let counter = 0

app.use(express.static('public'))

const router = express.Router()

router.get('/api/inc', (req, res) => {
  counter++
  const updatedCounter = `<h2 id="counter">Counter <span>${counter}</span></h2>`
  res.send(updatedCounter)
})
router.get('/api/dec', (req, res) => {
  counter--
  const updatedCounter = `<h2 id="counter">Counter <span>${counter}</span></h2>`
  res.send(updatedCounter)
})

app.use(router)

app.listen(3000, () => {
  console.log('server running at http://localhost:' + 3000)
})
