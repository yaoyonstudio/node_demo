module.exports = (app) => {
  app.get('/test', (req, res) => {
    res.send('This is a test...')
  })
}
