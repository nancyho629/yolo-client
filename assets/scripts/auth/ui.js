'use strict'
const changePwTemplate = require('../templates/change-pw.handlebars')
const navBarForm = require('./../templates/navbar.handlebars')
const signInForm = require('./../templates/auth.handlebars')
const store = require('../store')

const signOutSuccess = function () {
  console.log('Signed out')
  $('.main').html(signInForm())
  $('nav').html('')
}

const signInSuccess = function (data) {
  store.user = data.user
  console.log('Signed in')
  $('nav').html(navBarForm)
}

const signUpSuccess = function () {
  console.log('Signed Up!!!')
}

const signUpFailure = function () {
  console.log('Sign Up Failed :(')
}

const changePasswordSuccess = function (data) {
  console.log('Password Changed')
  console.log('changepw success', data)
}

const failure = function (data) {
  console.log('Fail!!!!!')
  console.log('fail pw', data)
}

const goChangePassword = () => {
  $('.main').html('')
  console.log('did it show change pw form?')
  $('.main').html(changePwTemplate())
}

module.exports = {
  signOutSuccess,
  signInSuccess,
  failure,
  signUpFailure,
  signUpSuccess,
  changePasswordSuccess,
  goChangePassword
}
