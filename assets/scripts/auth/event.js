'use strict'
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui')
const itemEvents = require('../item/event.js')

const addHandlers = () => {
  $('.main').on('submit', '#sign-in', onSignIn)
  $('.main').on('submit', '#sign-up', onSignUp)
  $('nav').on('submit', '.change-password', onChangePassword)
  $('nav').on('click', '#sign-out', onSignOut)
  // $('nav').on('submit', '.change-pw', onGoChangePassword)
  // $('.change-pwd').on('click', '#)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.failure)
}
const onSignIn = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)
  api.signIn(data)
    .then(responseData => {
      ui.signInSuccess(responseData)
      itemEvents.onGetItems(event)
    })
    .catch(ui.signInFailure)
}

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onGoChangePassword = event => {
  event.preventDefault()
  ui.goChangePassword()
}

module.exports = {
  addHandlers,
  onSignOut,
  onSignIn,
  onSignUp,
  onChangePassword,
  onGoChangePassword
}
