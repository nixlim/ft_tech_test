describe('Index page', () => {
  it('should render "I am up and running"', () => {
    cy.visit('http://localhost:3000')
    cy.contains('I am up and running')
    cy.contains('FT Tech Tester')
  })
})