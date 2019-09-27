'use strict'
const changePwTemplate = require('../templates/change-pw.handlebars')
const navBarForm = require('./../templates/navbar.handlebars')
const signInForm = require('./../templates/auth.handlebars')
const createForm = require('./../templates/create.handlebars')
const store = require('../store')

const signOutSuccess = function () {
  store.user = null
  $('#login-message').text('Signed Out Successfully')
  $('#message').text('')
  $('#item-message').text('')
  $('.main').html(signInForm)
  $('nav').html('')
  $('.content').html('')
  $('.change-pwd').html('')
}

const signInSuccess = function (data) {
  store.user = data.user
  $('#login-message').text('Signed In Successfully')
  $('.main').html(createForm)
  $('nav').html(navBarForm)
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
  $('.change-pwd').html('')
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
  // $('.main').html('')
  $('.change-pwd').html(changePwTemplate())
}

module.exports = {
  signOutSuccess,
  signInSuccess,
  failure,
  signUpFailure,
  signUpSuccess,
  changePasswordSuccess,
  goChangePassword,
  signInFailure,
  changePasswordFailure
}
