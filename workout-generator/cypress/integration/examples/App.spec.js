describe ('Test App', () => {

    it ('launches', () => {
      cy.visit ('/');
    });

    it ('launches', () => {
        cy.visit ('/');
        cy.get('[data-cy=button]').should('contain', 'What Muscle Groups?');
      });

    it('launches', () => {
    cy.visit('/');
    cy.get('[data-cy=Workout]').click();
    cy.url().should('include', '/workouts')
});

  });