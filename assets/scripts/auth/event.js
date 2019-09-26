'use strict'

const api = require('./api')
const ui = require('./ui')

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
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
    .then(ui.signInSuccess)
    .catch(ui.failure)
}

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.failure)
}

=======
>>>>>>> Add 'change password' to auth files
const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
<<<<<<< HEAD
    .catch(ui.failure)
}

module.exports = {
  addHandlers,
  onSignOut,
  onSignIn,
  onSignUp,
=======
    .catch(ui.changePasswordFailure)
}

module.exports = {
  onSignOut,
>>>>>>> Add 'change password' to auth files
  onChangePassword
}
