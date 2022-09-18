import App from 'components/App';
import { hexToRGB } from 'utils/color';

describe('App works', () => {
  it('mounts the app', () => {
    cy.mount(<App />);
    cy.get('.app-root')
      .should('have.css', 'background-color', hexToRGB('#000'))
      .and('have.css', 'color', hexToRGB('#DDD'));
    cy.get('h1').contains('Hello Dev!');
    cy.get('img').should('have.attr', 'alt', 'Heart Icon');
  });
});