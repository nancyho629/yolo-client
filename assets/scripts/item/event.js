'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui')

const onGetItems = (event) => {
  event.preventDefault()
  api.getItems()
    .then(ui.getItemsSuccess)
    .catch(console.error)
}

const onCreateItem = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.create(data)
    .then(responseData => {
      ui.onCreateSuccess(responseData)
      onGetItems(event)
    })
    .catch(ui.onCreateSuccess)

const onUpdateItem = (event) => {
  event.preventDefault()

  const data = getFormFields(event.target)
  api.updateItem(data)
    .then(ui.updateItemsSuccess)
    .catch(console.error)

}

module.exports = {
  onGetItems,
  onCreateItem
  onUpdateItem
}
