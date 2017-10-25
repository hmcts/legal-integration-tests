'use strict'
/* global actor */

let I

module.exports = {

  _init () {
    I = actor()
  },
  fields: {
    personalInjuryYes: 'input[id=personal_injury_yes]',
    personalInjuryNo: 'input[id=personal_injury_no]',
    generalDamagesLess: 'input[id="generalDamages[value]LESS"]',
    generalDamagesMore: 'input[id="generalDamages[value]MORE"]'
  },
  buttons: {
    saveAndContinue: 'input.button'
  },

  open () {
    I.amOnPage('/legal/claim/personal-injury')
  },

  enterPersonalInjuryLessThan1000 () {
    I.checkOption(this.fields.personalInjuryYes)
    I.checkOption(this.fields.generalDamagesLess)
    I.click(this.buttons.saveAndContinue)
  },

  enterPersonalInjuryMoreThan1000 () {
    I.checkOption(this.fields.personalInjuryYes)
    I.checkOption(this.fields.generalDamagesMore)
    I.click(this.buttons.saveAndContinue)
  },

  noPersonalInjury () {
    I.checkOption(this.fields.personalInjuryNo)
    I.click(this.buttons.saveAndContinue)
  },

  checkMandatoryErrorMessage () {
    I.click(this.buttons.saveAndContinue)
    I.see('Choose yes if it’s a personal injury claim')
  },

  checkMandatoryErrorMessageForAmount () {
    I.checkOption(this.fields.personalInjuryYes)
    I.click(this.buttons.saveAndContinue)
    I.see('Choose an amount')
  }

}
