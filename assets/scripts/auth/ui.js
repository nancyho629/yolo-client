'use strict'

const signOutSuccess = function () {
  console.log('Signed out')
}

<<<<<<< HEAD
const signInSuccess = function () {
  console.log('Signed in')
}

const signUpSuccess = function () {
  console.log('Signed Up!!!')
}

const signUpFailure = function () {
  console.log('Sign Up Failed :(')
}

const changePasswordSuccess = function (data) {
  console.log('Password Changed')
}

const failure = function () {
  console.log('Fail!!!!!')
}
module.exports = {
  signOutSuccess,
  signInSuccess,
  failure,
  signUpFailure,
  signUpSuccess,
  changePasswordSuccess

=======
const changePasswordSuccess = function (data) {
  $('#message').text('Successful password change')
  $('#message').removeClass()
  $('#message').addClass('Success')
  $('form').trigger('reset')
}

module.exports = {
  signOutSuccess,
  changePasswordSuccess
>>>>>>> Add 'change password' to auth files
}
