module.exports = {
  port: 8081,
  db: {
    database: 'flaskblog',
    user: 'root',
    password: null,
    options: {
      host: 'localhost',
      port: 3306,
      dialect: 'mysql'
    }
  }
}
