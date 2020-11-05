describe('Home Page', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.contains('a', 'Working')

    cy.wait(500)
    cy.percySnapshot()
  })
})
