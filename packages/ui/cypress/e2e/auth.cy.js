describe('Initial cypress test', () => { // (1)
  beforeEach(() => { // (2)
    cy.visit('http://localhost:6006'); // (3)
  });

  it('First test case', () => { // (4)
    cy.get("a[title='kt cloud']").should('be.visible'); // (5)
  });
});