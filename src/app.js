const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const { sequelize } = require('./models')
// const config = require('./config')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

require('./routes/routes')(app)
require('./routes/api')(app)
require('./routes/test')(app)

app.use(function (req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

// 错误处理
app.use(function (err, req, res, next) {
  res.status(err.status || 500)
  res.render('error', {
    status: false,
    message: err.message,
    error: (app.get('env') === 'development') ? err : {}
  })
})

// app.listen(config.port)

sequelize.sync()
  .then(() => {
    // app.listen(config.port)
    // console.log(`Server started on port ${config.port}`)
    app.listen(8081)
    console.log(`Server started on port 8081`)
  })
