'use strict'
const changePwTemplate = require('../templates/change-pw.handlebars')
const navBarForm = require('./../templates/navbar.handlebars')
const signInForm = require('./../templates/auth.handlebars')
const store = require('../store')

const signOutSuccess = function () {
  $('#login-message').text('Signed Out Successfully')
  $('#message').text('')
  $('#item-message').text('')
  $('.main').html(signInForm)
  $('nav').html('')
  $('.create-item').hide()
  $('.content').html('')
}

const signInSuccess = function (data) {
  store.user = data.user
  $('#login-message').text('Signed In Successfully')
  $('.main').html('')
  $('nav').html(navBarForm)
  $('.create-item').show()
}

const signInFailure = function (data) {
  $('#login-message').text('Sign In Failed')
  $('form').trigger('reset')
}

const signUpSuccess = function () {
  $('#login-message').text('Signed Up Successfully')
}

const signUpFailure = function () {
  $('#login-message').text('Sign Up Failed')
  $('form').trigger('reset')
}

const changePasswordSuccess = function (data) {
  $('#login-message').text('Change Password Successfully')
}

const changePasswordFailure = function (data) {
  $('#login-message').text('Change Password Failed')
  $('form').trigger('reset')
}

const failure = function (data) {
  $('#login-message').text('Error!')
  $('form').trigger('reset')
}

const goChangePassword = () => {
  $('.main').html('')
  $('.main').html(changePwTemplate())
}

module.exports = {
  signOutSuccess,
  signInSuccess,
  failure,
  signUpFailure,
  signUpSuccess,
  changePasswordSuccess,
  goChangePassword,
  changePasswordFailure,
  signInFailure
}
