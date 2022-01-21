describe('New bank user', function () {
  it('with valid data should be added to the system', function () {
    cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject');

    cy.get('[ng-click="manager()"]').click();
    cy.url().should('include', '/manager');
    cy.get('[ng-click="addCust()"]').click();
    cy.get('[ng-model="fName"]').type('first name');
    cy.get('[ng-model="lName"]').type('last name');
    cy.get('[ng-model="postCd"]').type('02001');
    cy.get('[type="submit"]').click();

    cy.on('window:alert', (str) => expect(str).contains(`Customer added successfully with customer id`));
  });
});
