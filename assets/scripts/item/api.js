'use strict'

const config = require('../config.js')
const store = require('../store.js')

const getItems = function () {
  return $.ajax({
    url: config.apiUrl + '/items',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

<<<<<<< HEAD

const create = function (data) {
  return $.ajax({
    url: config.apiUrl + '/items',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
=======
const deleteItem = (itemId) => {
  return $.ajax({
    url: config.apiUrl + `/items/${itemId}`,
    method: 'DELETE',
    headers: {
      // We use bearer. Syntax?
      Authorization: `Bearer ${store.user.token}`
    }
>>>>>>> Create ajax request for 'delete'
  })
}

module.exports = {
  getItems,
<<<<<<< HEAD
  create
}

const updateItem = function (data) {
  return $.ajax({
    url: config.apiUrl + '/items/' + data.id,
    method: 'PATCH',
    headers: {
      AuthorizationL 'Token token=' + store.user.token
    }
  })
}

module.exports = getItems

=======
  deleteItem
}
>>>>>>> Create ajax request for 'delete'
