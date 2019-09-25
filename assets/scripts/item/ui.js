'use strict'

// const store = require('../store')

const getItemsSuccess = (data) => {
  $('.content').html('')
  $('form').trigger('reset')
}

module.exports = {
  getItemsSuccess
}
