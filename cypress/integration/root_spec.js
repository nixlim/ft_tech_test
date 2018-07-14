describe('"/" page', () => {
  it('should render root page', () => {
    cy.visit('http://localhost:3000')
    cy.contains('FT Headlines Search')
    cy.contains('Search FT Headlines')
  })
})
