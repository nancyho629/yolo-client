'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui')

const onGetItems = (event) => {
  event.preventDefault()
  console.log('Does onGetItems work?!?!')
  api.getItems()
    .then(ui.getItemsSuccess)
    .catch(console.error)
}

const onCreateItem = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('Create data is: ', data)
  api.create(data)
    .then(responseData => {
      ui.onCreateSuccess(responseData)
      onGetItems(event)
    })
    .catch(ui.onCreateSuccess)
}

const onUpdateItem = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.updateItem(data)
    .then(ui.updateItemsSuccess)
    .catch(console.error)
}

const onDeleteItem = (event) => {
  event.preventDefault()
  // Should get an id of the resourse that was targeted. At least did it in my other project.
  const target = $(event.target)
  console.log('target.data is ', target.data)
  const id = target.data('id')
  console.log('id is ', id)
  api.deleteItem(id)
    .then(responseData => {
      ui.deleteItemSuccess(responseData)
      onGetItems(event)
    })
    .catch(console.error)
}

// const onUpdateClick = (event) => {
//   event.preventDefault()
//
// }

const addHandlers = () => {
  $('#create-items').on('submit', onCreateItem)
  $('#getItems').on('click', onGetItems)
  // TODO event delegation to attach listeners to update and delete buttons
  // $('.content').on('click', '.update-item', onUpdateClick)
  $('.content').on('click', '.delete-item', onDeleteItem)
}

module.exports = {
  onGetItems,
  onCreateItem,
  onUpdateItem,
  onDeleteItem,
  addHandlers
}
