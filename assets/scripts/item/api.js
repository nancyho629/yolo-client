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
