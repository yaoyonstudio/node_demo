const IndexCtrl = require('../controllers/IndexCtrl')

module.exports = (app) => {
  app.get('/', IndexCtrl.Index)
  app.get('/index.html', (req, res) => {
    res.render('index', {title: 'Node Project', message: 'Hello Node!'})
  })
}
