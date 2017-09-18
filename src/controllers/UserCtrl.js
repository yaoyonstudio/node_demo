const { trueReturn, falseReturn } = require('../common')
const { User } = require('../models')

module.exports = {
  async getUsers (req, res) {
    try {
      const users = await User.findAll()
      res.send(trueReturn(users))
    } catch (err) {
      res.status(400).send(falseReturn(err))
    }
  },
  async addUser (req, res) {
    try {
      const user = await User.create(req.body)
      if (user) {
        res.send(trueReturn(user.toJSON()))
      } else {
        res.status(400).send(falseReturn('用户注册失败'))
      }
    } catch (err) {
      res.status(400).send(falseReturn(err))
    }
  },
  async updateUser (req, res) {
    try {
      const user = await User.update(req.body, { where: { user_id: req.params.id } })
      if (user && user.length > 0 && user[0] > 0) {
        res.send(trueReturn(user[0]))
      } else {
        res.status(400).send(falseReturn('用户修改失败'))
      }
    } catch (err) {
      res.status(400).send(falseReturn(err))
    }
  },
  async deleteUser (req, res) {
    try {
      const user = await User.destroy({ where: { user_id: req.params.id } })
      if (user) {
        res.send(trueReturn(user))
      } else {
        res.status(400).send(falseReturn('用户删除失败'))
      }
    } catch (err) {
      res.status(400).send(falseReturn(err))
    }
  },
  async getUser (req, res) {
    try {
      const user = await User.findOne({
        where: {
          user_id: req.params.id
        }
      })
      if (user) {
        res.send(trueReturn(user))
      } else {
        res.send(falseReturn('找不到用户数据'))
      }
    } catch (err) {
      res.status(400).send(falseReturn(err))
    }
  }
}
