'use strict'

const config = require('../config.js')
const store = require('../store.js')

// Deletes Token
const signOut = function () {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  signOut
}
