const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  const items = [
    { title: 'D', message: 'esculpe pelo teste' },

    { title: 'E', message: 'spetacular' },

    { title: 'M', message: 'urilo' },

    { title: 'A', message: 'rroz' },

    { title: 'I', message: 'ndio tupiniquin' },

    { title: 'S', message: 'afe zone' }
  ]

  const subtitle = "uma linguagem de modelagem para criação de paginas html em JS"
  res.render('pages/index', {
    qualitys: items,
    subtitle: subtitle,
  })
})

app.get('/sobre', function (req, res) {
  res.render('pages/about')
})

app.listen(8080)
console.log('rodando')
