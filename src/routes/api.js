const UserCtrl = require('../controllers/UserCtrl')
const CommonValidate = require('../validations/CommonValidate')
const UserValidate = require('../validations/UserValidate')

module.exports = (app) => {
  app.get('/user', UserCtrl.getUsers)
  app.post('/user', UserValidate.register, UserCtrl.addUser)
  app.put('/user/:id', CommonValidate.common, UserValidate.update, UserCtrl.updateUser)
  app.delete('/user/:id', CommonValidate.common, UserCtrl.deleteUser)
  app.get('/user/:id', CommonValidate.common, UserCtrl.getUser)
}
