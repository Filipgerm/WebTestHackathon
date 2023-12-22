/// <reference types="Cypress" />


describe('Add Item to Cart', function() {
    beforeEach(function() {
        // Visit the page where the cart functionality is implemented
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
    });

    it('should add an item to the cart', function() {

        // Add an item to the cart
        cy.get('a.increment') // Select all divs with class product-image
        .eq(2) // Index starts at 0, so eq(2) represents the third element
        .click() // Click on the specific div.product-image
        .click(); // Second click
        //.click(); // Third click

        cy.get('div.product-action')
        .eq(2)
        .click();

        cy.get('div.stepper-input input.quantity')
        .eq(2)
        .invoke('val') // Retrieve the value attribute of the input element
        .then((value) => {
        const inputValue = parseInt(value); // Convert the retrieved value to an integer
        // Perform any assertions or actions needed with the inputValue
        expect(inputValue).to.equal(3); // Assert that the item count is 1
        });

        cy.get('div.cart-info') // Select the div containing the cart info
        .find('strong') // Find the strong element within that div
        .eq(0)
        .invoke('text') // Retrieve the text content of the strong element
        .then((text) => {
          const itemCount = parseInt(text.trim()); // Convert the text to a number if needed
          // You can then use the itemCount in your tests or assertions
          // For example:
          expect(itemCount).to.equal(1); // Assert that the item count is 1
        });

    });

    
    it('should add multiple items to the cart', function() {
        // Add an item to the cart
        cy.get('a.increment') 
        .eq(5) 
        .click(); 

        cy.get('div.product-action')
        .eq(5)
        .click();

        // Add another item to the cart
        cy.get('a.increment') 
        .eq(6) 
        .click()
        .click(); 

        cy.get('div.product-action')
        .eq(6)
        .click();


        cy.get('div.cart-info') // Select the div containing the cart info
        .find('strong') // Find the strong element within that div
        .eq(0)
        .invoke('text') // Retrieve the text content of the strong element
        .then((text) => {
        const itemCount = parseInt(text.trim()); // Convert the text to a number if needed
        // You can then use the itemCount in your tests or assertions
        // For example:
        expect(itemCount).to.equal(2); // Assert that the item count is 1
        });
    });


});