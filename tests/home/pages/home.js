'use strict'
/* global actor */

let I

module.exports = {

  _init () {
    I = actor()
  },

  open () {
    I.amOnPage('/legal/')
  }

}
