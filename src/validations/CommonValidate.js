const Joi = require('joi')
const { falseReturn } = require('../common')

module.exports = {
  common (req, res, next) {
    const schema = {
      id: Joi.number().min(1).required()
    }
    const { error } = Joi.validate(req.params, schema)
    if (error) {
      res.send(falseReturn('接口应带有正确的ID参数!'))
    } else {
      next()
    }
  }
}
