module.exports = {
  Index (req, res) {
    res.render('index', {title: 'Node Project', message: 'Hello Node! Here we begin...'})
  }
}
