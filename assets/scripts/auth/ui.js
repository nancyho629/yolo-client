'use strict'
// const changePwTemplate = require('../templates/change-pw.handlebars')
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

  const quotes =
[
  `“Adventure is worthwhile.” – Aesop`,
  `“Travel isn’t always pretty. It isn’t always comfortable. Sometimes it hurts, it even breaks your heart. But that’s okay. The journey changes you; it should change you. It leaves marks on your memory, on your consciousness, on your heart, and on your body. You take something with you. Hopefully, you leave something good behind.” – Anthony Bourdain`,
  `“Traveling – it leaves you speechless, then turns you into a storyteller.” – Ibn Battuta`,
  `“We travel, some of us forever, to seek other places, other lives, other souls.” – Anais Nin`,
  `“A journey is best measured in friends, rather than miles.” – Tim Cahill`,
  `“The gladdest moment in human life, methinks, is a departure into unknown lands.” – Sir Richard Burton`,
  `“No place is ever as bad as they tell you it’s going to be.” – Chuck Thompson`,
  `“I am not the same, having seen the moon shine on the other side of the world.” – Mary Anne Radmacher`,
  `“Travel makes one modest. You see what a tiny place you occupy in the world.” – Gustave Flaubert`,
  `“He who would travel happily must travel light.” – Antoine de St. Exupery`,
  `“The man who goes alone can start today; but he who travels with another must wait till that other is ready.” – Henry David Thoreau`,
  `“The life you have led doesn’t need to be the only life you have.” – Anna Quindlen,
  “Man cannot discover new oceans unless he has the courage to lose sight of the shore.” – Andre Gide`,
  `You only live once, but if you do it right, once is enough. – Mae West`,
  `Life is too short to wake up with regrets. So love the people who treat you right. Forget about those who don’t. Believe everything happens for a reason. If you get a chance, take it. If it changes your life, let it. Nobody said life would be easy, they just promised it would most likely be worth it. Harvey Mackay`,
  `In the end, it's not the years in your life that count. It's the life in your years. - Abraham Lincoln,
  Focus on what you want to do, don't be scared to try stuff. You only live once. You gotta take risks at time. - Mark Zupan`,
  `Live life like you mean it! Stop procrastinating! Do all that you can...with all that you have...in the place that you are...right now! Life is too unpredictable to put things off and not take it seriously. – Les Brown`,
  `You only live once. If you don't enjoy it, it's your fault, nobody else's. – Duncan Bannatyne`,
  `Go for it now. The future is promised to no one. - Wayne Dyer`,
  `You only live once, so I try to say yes to everything. - Joshua Bell`,
  `History, despite its wrenching pain, cannot be unlived, but if faced with courage, need not be lived again. - Maya Angelou`,
  `For those of you that use YOLO to justify sin: YOLO, you only live once, but then you burn in hell forever. - Nouman Ali Khan`,
  `You only live once and, usually, not even then. - Michael O'Donoghue`
]

  let i = 0

  setInterval((function quoteSlider () {
    $('#quotes').html(quotes[i])
    if (i === quotes.length) {
      i = 0
    } else {
      i++
    }
    return quoteSlider
  })(), 60000)
}

const signInFailure = function (data) {
  $('#login-message').text('Sign In Failed')
  $('form').trigger('reset')
}

const signUpSuccess = function () {
  $('#login-message').text('Signed Up Successfully')
  $('form').trigger('reset')
}

const signUpFailure = function () {
  $('#login-message').text('Sign Up Failed')
  $('form').trigger('reset')
}

const changePasswordSuccess = function (data) {
  $('#login-message').text('Change Password Successfully')
  $('.change-pwd').html('')
  $('form').trigger('reset')
}

const changePasswordFailure = function (data) {
  $('#login-message').text('Change Password Failed')
  $('form').trigger('reset')
}

const failure = function (data) {
  $('#login-message').text('Error!')
  $('form').trigger('reset')
}

// const goChangePassword = () => {
  // $('.main').html('')
  // $('.change-pwd').html(changePwTemplate())
// }

module.exports = {
  signOutSuccess,
  signInSuccess,
  failure,
  signUpFailure,
  signUpSuccess,
  changePasswordSuccess,
  // goChangePassword,
  signInFailure,
  changePasswordFailure
}
