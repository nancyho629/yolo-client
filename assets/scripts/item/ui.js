'use strict'

// const store = require('../store')
const indexItemsTemplate = require('./../templates/index.handlebars')

const getItemsSuccess = (data) => {
  console.log('Data is ', data)
  const indexItemsHtml = indexItemsTemplate({ items: data.items })
  // console.log('indexItemsHtml is ', indexItemsHtml)
  $('#some-content').html(indexItemsHtml)
  $('form').trigger('reset')
}

const onCreateSuccess = responseData => {
  $('#item-message').text(`You've added a new suggestion!!!`)
  $('#signed-in-user').text('')
  $('form').trigger('reset')
}

const onCreateFailure = function () {
  $('#item-message').text(`Item Not Created`)
  $('form').trigger('reset')
}

const updateItemSuccess = (data) => {
  console.log('Update item success!')
}

const deleteItemSuccess = () => {
  console.log('Deleted')
}

module.exports = {
  getItemsSuccess,
  onCreateSuccess,
  onCreateFailure,
  updateItemSuccess,
  deleteItemSuccess
}
