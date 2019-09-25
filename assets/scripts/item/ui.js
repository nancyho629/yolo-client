'use strict'

// const store = require('../store')

const getItemsSuccess = (data) => {
  $('.content').html('')
  $('form').trigger('reset')
}

<<<<<<< HEAD

const onCreateSuccess = responseData => {
  $('#item-message').text(`You've added a new suggestion!!!`)
  $('#signed-in-user').text('')
  $('form').trigger('reset')
}

const onCreateFailure = function () {
  $('#item-message').text(`Item Not Created`)
  $('form').trigger('reset')

const updateItemSuccess = (data) => {
  console.log('Update item success!')
=======
const deleteItemSuccess = () => {
  console.log('Deleted')
>>>>>>> Modify ui.js on delete action
}

module.exports = {
  getItemsSuccess,
<<<<<<< HEAD
  onCreateSuccess,
  onCreateFailure,
  updateItemSuccess
=======
  deleteItemSuccess
>>>>>>> Modify ui.js on delete action
}
