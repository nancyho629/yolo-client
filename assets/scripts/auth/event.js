'use strict'
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui')
const itemEvents = require('../item/event.js')

const addHandlers = () => {
  // $('#sign-up').on('submit', onSignUp)
  // $('#sign-in').on('submit', onSignIn)
  $('.main').on('submit', '#sign-in', onSignIn)
  $('.main').on('submit', '#sign-up', onSignUp)
  $('.main').on('submit', '.change-password', onChangePassword)
  $('nav').on('submit', '#sign-out', onSignOut)
  $('nav').on('submit', '.change-pw', onGoChangePassword)
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
  console.log('changepw data:', data)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onGoChangePassword = event => {
  event.preventDefault()
  console.log('does it work?')
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
