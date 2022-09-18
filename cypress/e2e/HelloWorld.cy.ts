describe('Page Greets the user', () => {
  it('Checks Propper Greeting', () => {
    cy.clock(new Date('2022-01-01T00:00:00'));
    cy.visit('/');
    cy.get('h1').contains('Hello Dev!');
    cy.get('img')
      .should('have.attr', 'alt', 'Heart Icon')
      .and('have.attr', 'src');
    cy.get('h4').contains('Happy Saturday!');
  });
});