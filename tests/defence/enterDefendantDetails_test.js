'use strict'

Feature('Defendants Enter details of claim')

Scenario('I can fill in Claimant organization and Defendant organization details', (I, userSteps, defendantSteps) => {
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
  defendantSteps.enterDefendantTypeOrganisation()
  I.see('Defendant: Def corporation')
  defendantSteps.enterDefendantAddress()
  defendantSteps.enterDefendantRepsCompanyName()
  I.see("Defendant's legal representative: Defendant Rep Ltd")
  defendantSteps.enterDefendantRepsAddress()
  defendantSteps.enterAnotherDefendant()
})

Scenario('I can fill in Claimant individual and Defendant individual details', (I, userSteps, defendantSteps) => {
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
  defendantSteps.enterDefendantTypeIndividual()
  I.see('Defendant: Mr Pret')
  defendantSteps.enterDefendantAddress()
  defendantSteps.noDefendantCompanyName()
  defendantSteps.noAnotherDefendant()
})

Scenario('Check Error Messages in Enter your defendant type Page', (I, userSteps, defendantType) => {
  userSteps.loginDefaultUser()
  userSteps.startClaim()
  userSteps.enterYourOrganisationNamePage()
  userSteps.enterYourOrganisationAddress()
  userSteps.enterYourOrganisationContactDetails()
  userSteps.enterYourReferenceNumber()
  userSteps.enterYourPreferredCountyCourt()
  userSteps.enterClaimantTypeOrganisation()
  userSteps.enterClaimantAddress()
  defendantType.checkMandatoryErrorMessageForChooseDefendant()
  defendantType.checkMandatoryErrorMessageForOrganisationName()
  defendantType.checkForBlankErrorMessageForOrganisationName()
  defendantType.checkMandatoryErrorMessageForIndividualName()
  defendantType.checkForBlankErrorMessageForIndividualName()
})

Scenario('Check Error Messages in Enter your defendant address Page', (I, userSteps, defendantSteps, defendantAddress) => {
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
  defendantSteps.enterDefendantTypeOrganisation()
  I.see('Defendant: Def corporation')
  defendantAddress.checkMandatoryErrorMessage()
  defendantAddress.checkForBlankErrorMessage()
  defendantAddress.checkForIndividualMessage()
  defendantAddress.checkForAddressLineLength()
  defendantAddress.checkForPostCodeLengthMessage()
})

Scenario('Check Error Messages in Enter your defendant representative Page', (I, userSteps, defendantSteps, defendantRepresentative) => {
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
  defendantSteps.enterDefendantTypeOrganisation()
  I.see('Defendant: Def corporation')
  defendantSteps.enterDefendantAddress()
  defendantRepresentative.checkMandatoryErrorMessage()
  defendantRepresentative.checkMandatoryErrorMessageForDefendantCompanyName()
  defendantRepresentative.checkForBlankErrorMessageForDefendantCompanyName()
})

Scenario('Check Error Messages in Enter your defendant representative address Page', (I, userSteps, defendantSteps, defendantRepresentativeAddress) => {
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
  defendantSteps.enterDefendantTypeOrganisation()
  I.see('Defendant: Def corporation')
  defendantSteps.enterDefendantAddress()
  defendantSteps.enterDefendantRepsCompanyName()
  defendantRepresentativeAddress.checkMandatoryErrorMessage()
  defendantRepresentativeAddress.checkForBlankErrorMessage()
  defendantRepresentativeAddress.checkForIndividualMessage()
  defendantRepresentativeAddress.checkForAddressLineLength()
  defendantRepresentativeAddress.checkForPostCodeLengthMessage()
})

Scenario('Check Error Messages in Enter another defendant add Page', (I, userSteps, defendantSteps, defendantAddAnotherDefendant) => {
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
  defendantSteps.enterDefendantTypeOrganisation()
  I.see('Defendant: Def corporation')
  defendantSteps.enterDefendantAddress()
  defendantSteps.enterDefendantRepsCompanyName()
  I.see("Defendant's legal representative: Defendant Rep Ltd")
  defendantSteps.enterDefendantRepsAddress()
  defendantAddAnotherDefendant.checkMandatoryErrorMessage()
})

Scenario('Check Error Messages on defendant service address Page', (I, userSteps, defendantSteps, defendantAddAnotherDefendant) => {
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
  defendantSteps.enterDefendantTypeOrganisation()
  I.see('Defendant: Def corporation')
  defendantSteps.enterDefendantAddress()
  defendantSteps.enterDefendantRepsCompanyName()
  I.see("Defendant's legal representative: Defendant Rep Ltd")
  defendantSteps.noDefendantCompanyName()
})
