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

<<<<<<< HEAD
// Creates Token
const signIn = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data
  })
}

// Sign up
const signUp = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data
  })
}

=======
>>>>>>> Add 'change password' to auth files
const changePassword = function (data) {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
<<<<<<< HEAD
    }
  })
}
module.exports = {
  signOut,
  signIn,
  signUp,
=======
    },
    data
  })
}

module.exports = {
  signOut,
>>>>>>> Add 'change password' to auth files
  changePassword
}
