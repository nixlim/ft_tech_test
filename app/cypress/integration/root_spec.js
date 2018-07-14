describe('"/" page', () => {
  it('should render root page', () => {
    cy.visit('http://localhost:3000')
    cy.contains('Financial Times Headlines Search Engine')
    cy.contains('Search FT Headlines')
  })
})
