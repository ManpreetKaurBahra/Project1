/// <reference types = "cypress" />

it('google search', function(){

  cy.visit("https://google.com/")
  cy.get('#APjFqb').type("Automation Step by Step{Enter}")
  // cy.contains('Google Search').click();

})