const Joi = require('joi')
const { falseReturn } = require('../common')

const UserValidate = {
  validate (error, res, next) {
    if (error) {
      switch (error.details[0].context.key) {
        case 'user_name':
          res.send(falseReturn('用户名格式不正确'))
          break
        case 'user_password':
          res.send(falseReturn('用户密码格式不正确'))
          break
        case 'user_email':
          res.send(falseReturn('用户邮箱格式不正确'))
          break
        default:
          res.send(falseReturn('表单验证不正确'))
          break
      }
    } else {
      next()
    }
  },
  register (req, res, next) {
    const schema = {
      user_name: Joi.string().regex(/^[a-zA-Z0-9]/).required(),
      user_nickname: Joi.string(),
      user_password: Joi.string().regex(/^[a-zA-Z0-9]{6,32}$/).required(),
      user_email: Joi.string().email().required()
    }
    const { error, value } = Joi.validate(req.body, schema)
    UserValidate.validate(error, res, next)
    console.log('value:', value)
  },
  update (req, res, next) {
    const schema = {
      user_name: Joi.string().regex(/^[a-zA-Z0-9]/),
      user_nickname: Joi.string(),
      user_password: Joi.string().regex(/^[a-zA-Z0-9]{6,32}$/),
      user_email: Joi.string().email()
    }
    const { error, value } = Joi.validate(req.body, schema)
    UserValidate.validate(error, res, next)
    console.log('value:', value)
  }
}

module.exports = UserValidate
