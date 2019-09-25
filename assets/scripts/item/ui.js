'use strict'

// const store = require('../store')

const getItemsSuccess = (data) => {
  $('.content').html('')
  $('form').trigger('reset')
}

const updateItemSuccess = (data) => {
  console.log('Update item success!')
}

module.exports = {
  getItemsSuccess
}
