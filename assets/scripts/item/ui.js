'use strict'

// const store = require('../store')
const indexItemsTemplate = require('./../templates/index.handlebars')

const getItemsSuccess = (data) => {
  const indexItemsHtml = indexItemsTemplate({ items: data.items })
  $('.content').html(indexItemsHtml)
  $('form').trigger('reset')
  $('#item-message').text('Got All Your Bucket List Items!')
  $('#login-message').text('')
}

const onCreateSuccess = () => {
  $('#message').text(`You've added a new item!!!`)
  $('form').trigger('reset')
}

const onCreateFailure = function () {
  $('#message').text(`Item Not Created`)
  $('form').trigger('reset')
}

const updateItemsSuccess = (data) => {
  $('#message').text(`You've updated a new item!!!`)
}

const deleteItemSuccess = () => {
  $('#message').text(`You've deleted an item!!!`)
}

module.exports = {
  getItemsSuccess,
  onCreateSuccess,
  onCreateFailure,
  updateItemsSuccess,
  deleteItemSuccess
}
