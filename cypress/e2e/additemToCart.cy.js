/// <reference types="Cypress" />


describe('Add Item to Cart', function() {
    beforeEach(function() {
        // Visit the page where the cart functionality is implemented
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
    });

    it('should add an item to the cart', function() {
         
        // Add an item to the cart
        cy.get('div.increment') // Select all divs with class product-image
        .eq(2) // Index starts at 0, so eq(2) represents the third element
        .click(); // Click on the specific div.product-image
        //.click() // Second click
        //.click(); // Third click

        cy.get('div.product-action')
        .eq(2)
        .click();

        cy.get('div.cart-info') // Select the div containing the cart info
        .find('strong') // Find the strong element within that div
        .invoke('text') // Retrieve the text content of the strong element
        .then((text) => {
          const itemCount = parseInt(text.trim()); // Convert the text to a number if needed
          // You can then use the itemCount in your tests or assertions
          // For example:
          expect(itemCount).to.equal(1); // Assert that the item count is 1
        });

        // Assert that the item is added to the cart
        cy.get('.cart-item').should('have.length', 1);
    });



});
