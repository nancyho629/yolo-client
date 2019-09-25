'use strict'

// const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui')

const onGetItems = (event) => {
  event.preventDefault()
  api.getItems()
    .then(ui.getItemsSuccess)
    .catch(console.error)
}

const onUpdateItem = (event) => {
  event.preventDefault()

  const data = getFormFields(event.target)
  api.updateItem(data)
    .then(ui.updateItemsSuccess)
    .catch(console.error)
}

module.exports = {
  onGetItems,
  onUpdateItem
}
