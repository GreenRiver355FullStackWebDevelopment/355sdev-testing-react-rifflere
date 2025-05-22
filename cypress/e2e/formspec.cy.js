describe('Submit a rating', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/');
  });

  it('Add rating', () => {
    cy.get('[data-cy="input-name"]').type("McDonalds");
    cy.get('[data-cy="input-address"]').type("123 Central Ave.");
    cy.get('[data-cy="input-phone"]').type("555-123-4567");
    cy.get('[data-cy="input-cuisine"]').type("Surrealism");
    cy.get('[data-cy="input-rating"]').type(1);
    
    cy.get('[data-cy="form-submit"]').submit();

    cy.get('[data-cy="5-McDonalds"] ul').within(() => {
      cy.contains('li', '123 Central Ave.').should('be.visible');
      cy.contains('li', '555-123-4567').should('be.visible');
      cy.contains('li', 'Surrealism').should('be.visible');
      cy.contains('li', '1').should('be.visible');
    });
    
  })
})