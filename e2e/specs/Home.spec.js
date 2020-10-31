describe('Home Page', () => {
  it('Visits the app root url', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('a', 'Working')

    cy.percySnapshot();
  })
})
