'use strict'

const signOutSuccess = function () {
  console.log('Signed out')
}

const signInSuccess = function () {
  console.log('Signed in')
}

const signUpSuccess = function () {
  console.log('Signed Up!!!')
}

const signUpFailure = function () {
  console.log('Sign Up Failed :(')
}

const failure = function () {
  console.log('Fail!!!!!')
}
module.exports = {
  signOutSuccess,
  signInSuccess,
  failure,
  signUpFailure,
  signUpSuccess

}
