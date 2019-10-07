'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui')

const onGetItems = (event) => {
  event.preventDefault()
  api.getItems()
    .then(ui.getItemsSuccess)
    .catch(ui.failure)
}

const onCreateItem = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.create(data)
    .then(responseData => {
      ui.onCreateSuccess(responseData)
      onGetItems(event)
    })
    .catch(ui.onCreateFailure)
}

const onUpdateItem = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  const dataId = data.item._id
  api.updateItem(data, dataId)
    .then(() => {
      ui.updateItemsSuccess()
      $('#item-modal').modal('hide')
      onGetItems(event)
    })
    .catch(ui.failure)
}

const onDeleteItem = (event) => {
  event.preventDefault()
  // Should get an id of the resourse that was targeted. At least did it in my other project.
  const target = $(event.target)
  const id = target.data('id')
  api.deleteItem(id)
    .then(responseData => {
      ui.deleteItemSuccess(responseData)
      onGetItems(event)
    })
    .catch(ui.failure)
}

const onUpdateClick = (event) => {
  event.preventDefault()
  const target = $(event.target)

  const title = target.data('title')
  const description = target.data('description')
  const completed = target.data('completed')
  const id = target.data('id')
  $('#item-modal').modal('show')
  $('#iname').val(title)
  $('#item-desc').val(description)
  $('#item-id').val(id)
  if (completed) {
    $('#item-true').prop('checked', true)
  } else {
    $('#item-false').prop('checked', true)
  }
}

const addHandlers = () => {
  $('.main').on('submit', '#create-items', onCreateItem)
  $('#getItems').on('click', onGetItems)
  // TODO event delegation to attach listeners to update and delete buttons
  $('.content').on('click', '.update-item', onUpdateClick)
  $('#item-modal').on('submit', onUpdateItem)
  $('.content').on('click', '.delete-item', onDeleteItem)
}

module.exports = {
  onGetItems,
  onCreateItem,
  onUpdateItem,
  onDeleteItem,
  addHandlers
}
