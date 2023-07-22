


it('Assertions Demo', () => {

cy.visit('https://example.cypress.io/')
cy.contains('get').click();
cy.get('#query-btn').should('contain','Button')

// EXPLICIT ASSERTIONS

assert.equal('4','5','not equal')

})