'use strict'

Feature('Enter claim amount and submit claim')

Scenario('I can fill in Organisation details for Claimant, Defendant, Claim amount and Submit the claim', (I, userSteps, defendantSteps, amountClaimSteps) => {
  userSteps.loginDefaultUser()
  userSteps.startClaim()
  userSteps.enterYourOrganisationNamePage()
  userSteps.enterYourOrganisationAddress()
  userSteps.enterYourOrganisationContactDetails()
  userSteps.enterYourReferenceNumber()
  userSteps.enterYourPreferredCountyCourt()
  userSteps.enterClaimantTypeOrganisation()
  I.see('Claimant: Abc corporation')
  userSteps.enterClaimantAddress()
  userSteps.noAdditionalClaimant()
  defendantSteps.enterDefendantTypeOrganisation()
  I.see('Defendant: Def corporation')
  defendantSteps.enterDefendantAddress()
  defendantSteps.enterDefendantRepsCompanyName()
  I.see("Defendant's legal representative: Defendant Rep Ltd")
  defendantSteps.enterDefendantRepsAddress()
  defendantSteps.noAnotherDefendant()
  amountClaimSteps.personalInjuryLessThan1000()
  amountClaimSteps.housingDisrepairLessThan1000()
  amountClaimSteps.summariseTheClaim()
  amountClaimSteps.enterRangeOfTheClaim()
  amountClaimSteps.feeCheckForRangeTotal()
  amountClaimSteps.verifySummaryDetails()
  amountClaimSteps.addStatementOfTruthSignerNameAndRole()
  amountClaimSteps.addPayByAccountFeeNumber()
  amountClaimSteps.verifySubmittedPage()
})

Scenario('I can fill in individual details for Claimant, Defendant, Claim amount and Submit the claim ', function * (I, userSteps, defendantSteps, amountClaimSteps, submittedPage) {
  userSteps.loginDefaultUser()
  userSteps.startClaim()
  userSteps.enterYourOrganisationNamePage()
  userSteps.enterYourOrganisationAddress()
  userSteps.enterYourOrganisationContactDetails()
  userSteps.enterYourReferenceNumber()
  userSteps.enterYourPreferredCountyCourt()
  userSteps.enterClaimantTypeIndividual()
  I.see('Claimant: Mr Benugo')
  userSteps.enterClaimantAddress()
  userSteps.noAdditionalClaimant()
  defendantSteps.enterDefendantTypeIndividual()
  I.see('Defendant: Mr Pret')
  defendantSteps.enterDefendantAddress()
  defendantSteps.noDefendantCompanyName()
  defendantSteps.defendantAddressAsServiceAddress()
  defendantSteps.noAnotherDefendant()
  amountClaimSteps.personalInjuryLessThan1000()
  amountClaimSteps.housingDisrepairLessThan1000()
  amountClaimSteps.summariseTheClaim()
  amountClaimSteps.enterRangeOfTheClaim()
  amountClaimSteps.feeCheckForRangeTotal()
  amountClaimSteps.verifyIndividualSummaryDetails()
  amountClaimSteps.addStatementOfTruthSignerNameAndRole()
  amountClaimSteps.addPayByAccountFeeNumber()
  amountClaimSteps.verifySubmittedPage()
  const pdfUrl = yield I.grabAttributeFrom('ol li a', 'href')
  const sessionCookie = yield I.grabCookie('T2_SESSION_ID')
  yield I.downloadPDF(pdfUrl, sessionCookie.value)
})

Scenario('I can fill in Organisation details for Claimant, Defendant and no Claim amount details', (I, userSteps, defendantSteps, amountClaimSteps) => {
  userSteps.loginDefaultUser()
  userSteps.startClaim()
  userSteps.enterYourOrganisationNamePage()
  userSteps.enterYourOrganisationAddress()
  userSteps.enterYourOrganisationContactDetails()
  userSteps.enterYourReferenceNumber()
  userSteps.enterYourPreferredCountyCourt()
  userSteps.enterClaimantTypeOrganisation()
  I.see('Claimant: Abc corporation')
  userSteps.enterClaimantAddress()
  userSteps.noAdditionalClaimant()
  defendantSteps.enterDefendantTypeOrganisation()
  I.see('Defendant: Def corporation')
  defendantSteps.enterDefendantAddress()
  defendantSteps.enterDefendantRepsCompanyName()
  I.see("Defendant's legal representative: Defendant Rep Ltd")
  defendantSteps.enterDefendantRepsAddress()
  defendantSteps.noAnotherDefendant()
  amountClaimSteps.noPersonalInjuryClaim()
  amountClaimSteps.noHousingDisrepairClaim()
  amountClaimSteps.summariseTheClaim()
  amountClaimSteps.canNotStateTheClaimValue()
  amountClaimSteps.feeCheckForCanNotStateTheClaimValue()
  amountClaimSteps.verifyNoClaimSummaryDetails()
})

Scenario('Check personal injury more than 1000', (I, userSteps, amountClaimSteps) => {
  userSteps.loginDefaultUser()
  userSteps.startClaim()
  amountClaimSteps.personalInjuryMoreThan1000()
  I.seeInCurrentUrl('housing-disrepair')
})

Scenario('Check housing disrepair more than 1000', (I, userSteps, amountClaimSteps) => {
  userSteps.loginDefaultUser()
  userSteps.startClaim()
  amountClaimSteps.housingDisrepairMoreThan1000()
  I.seeInCurrentUrl('summarise-the-claim')
})

Scenario('Check housing disrepair less than 1000 and no other damages', (I, userSteps, amountClaimSteps) => {
  userSteps.loginDefaultUser()
  userSteps.startClaim()
  amountClaimSteps.housingDisrepairLessThan1000AndNoOtherDamages()
  I.seeInCurrentUrl('summarise-the-claim')
})

Scenario('Check higher value in amount claim Page', (I, userSteps, amountClaimSteps) => {
  userSteps.loginDefaultUser()
  userSteps.startClaim()
  amountClaimSteps.enterOnlyHigherValueAmount()
  I.seeInCurrentUrl('total')
})

Scenario('Check Error Messages in personal claim page', (I, userSteps, personalInjuryPage) => {
  userSteps.loginDefaultUser()
  userSteps.startClaim()
  personalInjuryPage.open()
  personalInjuryPage.checkMandatoryErrorMessage()
  personalInjuryPage.checkMandatoryErrorMessageForAmount()
})

Scenario('Check Error Messages in housing disrepair page', (I, userSteps, housingDisrepairPage) => {
  userSteps.loginDefaultUser()
  userSteps.startClaim()
  housingDisrepairPage.open()
  housingDisrepairPage.checkMandatoryErrorMessage()
  housingDisrepairPage.checkMandatoryErrorMessageForAmounts()
})

Scenario('Check Error Messages in summarise the claim page', (I, userSteps, summariseTheClaimPage) => {
  userSteps.loginDefaultUser()
  userSteps.startClaim()
  summariseTheClaimPage.open()
  summariseTheClaimPage.checkMandatoryErrorMessage()
  summariseTheClaimPage.checkForBlankErrorMessage()
})

Scenario('Check Error Messages in amount claim page', (I, userSteps, amountPage) => {
  userSteps.loginDefaultUser()
  userSteps.startClaim()
  amountPage.open()
  amountPage.checkMandatoryErrorMessage()
  amountPage.checkForBlankErrorMessage()
  amountPage.checkErrorMessageForLowerValueOnly()
  amountPage.checkErrorMessageForSelectingBothHigherAndCanNotCheckbox()
})

Scenario('Check Error Messages in statement of truth page', (I, userSteps, statementOfTruthPage) => {
  userSteps.loginDefaultUser()
  userSteps.startClaim()
  userSteps.enterYourOrganisationNamePage()
  statementOfTruthPage.open()
  statementOfTruthPage.checkMandatoryErrorMessage()
  statementOfTruthPage.checkForBlankErrorMessage()
  statementOfTruthPage.checkForIndividualMessage()
})

Scenario('Check Error Messages in pay by account page', (I, userSteps, amountClaimSteps, amountPage, payByAccountPage) => {
  userSteps.loginDefaultUser()
  userSteps.startClaim()
  userSteps.enterYourOrganisationNamePage()
  amountPage.open()
  amountClaimSteps.enterRangeOfTheClaim()
  payByAccountPage.open()
  payByAccountPage.checkMandatoryErrorMessage()
  payByAccountPage.checkForBlankErrorMessage()
  payByAccountPage.checkForInvalidReference()
})
