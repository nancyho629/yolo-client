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

const onCreateSuccess = (data) => {
  $('#message').text(`You've added a new item!!!`)
  $('.prepare').removeClass('invisible')
  $('#item-display').show().text(data.item.title).addClass('animated')
  $('form').trigger('reset').hide()
  setTimeout(() => {
    $('.prepare').addClass('invisible')
    $('#item-display').hide().text('').removeClass('animated')
    $('form').show()
  }, 3000)
}

const onCreateFailure = function () {
  $('#message').text(`Item Not Created`)
  $('form').trigger('reset')
}

const updateItemsSuccess = (data) => {
  $('#message').text(`You've updated a new item!!!`)
  $('.modal-backdrop').remove()
}

const deleteItemSuccess = () => {
  $('#message').text(`You've deleted an item!!!`)
  $('.modal-backdrop').remove()
}

const failure = () => {
  $('#message').text(`Unexpected error`)
}

module.exports = {
  getItemsSuccess,
  onCreateSuccess,
  onCreateFailure,
  updateItemsSuccess,
  deleteItemSuccess,
  failure
}
