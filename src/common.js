const common = {
  trueReturn (data) {
    return {
      status: true,
      data: data
    }
  },
  falseReturn (errorMsg) {
    return {
      status: false,
      errorMsg: errorMsg
    }
  }
}

module.exports = common
