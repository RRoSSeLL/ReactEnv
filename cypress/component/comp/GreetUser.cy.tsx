import GreetUser from 'components/GreetUser/GreetUser';

describe('Component Gives proper Greetings', () => {
  it('Greets the World!', () => {
    cy.mount(<GreetUser />);
    cy.get('h1')
      .contains('Hello World!')
      .should('have.css', 'color', 'rgb(0, 0, 0)');
    cy.get('h4').contains('Happy ');
  });
  it('Greets a Dev', () => {
    cy.mount(<GreetUser user="Dev"/>);
    cy.get('h1')
      .contains('Hello Dev!')
      .should('have.css', 'color', 'rgb(0, 0, 0)');
    cy.get('h4').contains('Happy ');
  });

});