'use strict'
/* global actor */

let I

module.exports = {

  _init () {
    I = actor()
  },

  buttons: {
    startNow: 'input.button.button-start'
  },

  open () {
    I.amOnPage('/legal/claim/start')
  },

  startClaim () {
    I.click(this.buttons.startNow)
  }
}
