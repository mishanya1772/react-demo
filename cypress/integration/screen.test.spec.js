describe('Color of the Send button', function () {
  it('should be changed after leaving a comment', function () {
    cy.visit('http://localhost:3000');
    cy.eyesOpen({
      appName: 'Demo App',
      testName: 'Ultrafast grid demo'
    });

    cy.get('[data-id="message"]').click();
    cy.get('[data-id="field"]').type(' data from automation test');
    cy.get('[data-id="addPost"]').click();

    cy.get('[data-id="post"]').each((item, index, list) => {
      console.log(item + ' ' + ' ' + index + ' ' + list);
    });

    cy.eyesCheckWindow({
      tag: 'Message tab',
      target: 'window',
      fully: true
    });
    
    cy.eyesClose();
  });
});
