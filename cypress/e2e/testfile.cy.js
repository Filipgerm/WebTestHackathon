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

        //Decrement case
        // Add an item to the cart
        cy.get('a.increment') 
        .eq(1) 
        .click()
        .click()
        .click(); 

        cy.get('div.stepper-input input.quantity')
        .eq(1)
        .invoke('val') // Retrieve the value attribute of the input element
        .then((value) => {
        const inputValue = parseInt(value); // Convert the retrieved value to an integer
        // Perform any assertions or actions needed with the inputValue
        expect(inputValue).to.equal(4); // Assert that the item count is 1
        });

        cy.get('a.decrement') 
        .eq(1) 
        .click(); 

        cy.get('div.product-action')
        .eq(1)
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
        expect(itemCount).to.equal(3); // Assert that the item count is 1
        });
        
    });

    it('The amount of money is calculated correctly', function() {
        // Add an item to the cart
        cy.get('a.increment') 
        .eq(9) 
        .click(); 

        cy.get('div.product-action')
        .eq(9)  
        .click();

        // Add another item to the cart
        cy.get('a.increment') 
        .eq(10) 
        .click()
        .click(); 

        cy.get('div.product-action')
        .eq(10)
        .click();


        cy.get('div.cart-info') // Select the div containing the cart info
        .find('strong') // Find the strong element within that div
        .eq(1)
        .invoke('text') // Retrieve the text content of the strong element
        .then((text) => {
        const itemCount = parseInt(text.trim()); // Convert the text to a number if needed
        // You can then use the itemCount in your tests or assertions
        // For example:
        expect(itemCount).to.equal(216); // Assert that the item count is 1
        });
    });

    it('{UNhappy path}should calculate amount of money correctly - defect ID 1', function() {
         
        // Increases the quantity of an item without adding it to the cart
        cy.get('a.increment') // Select all divs with class product-image
        .eq(2) // Index starts at 0, so eq(2) represents the third element
        .click(); // Click on the increment 
        
        
        //add a different item to cart
        cy.get('div.product-action')
        .eq(3)
        .click();

        cy.get('div.cart-info') // Select the div containing the cart info
        .find('strong') // Find the strong element within that div
        .eq(1)
        .invoke('text') // Retrieve the text content of the strong element
        .then((text) => {
          const itemCount = parseInt(text.trim()); // Convert the text to a number if needed
          // You can then use the itemCount in your tests or assertions
          // For example:
          expect(itemCount).to.equal(32); // Since I added 1 beetroot the price should be 32, but there is a defect because it takes the quantity of the product I increased 
                                          // and did not add to cart and multiplies it with the price of the beetroot  
        });
    });

    it('The order is correctly recorded, and a confirmation message is displayed', function(){
        // Click on the cart icon
        cy.get('a.cart-icon').click();

        // Click on the 'PROCEED TO CHECKOUT' button
        cy.contains('button', 'PROCEED TO CHECKOUT').click();

        // Click on the 'Place Order' button
        cy.contains('button', 'Place Order').click();

        // Select 'India' from the dropdown menu
        cy.get('select').select('India');

        // Click on the checkbox with the class 'chkAgree'
        cy.get('input[type="checkbox"].chkAgree').click();

        // Click on the button (replace the selector with the actual button selector)
        cy.get('button').contains('Proceed').click();

        // Verify that the confirmation message appears
        cy.contains('Thank you, your order has been placed successfully You\'ll be redirected to Home page shortly!!')
        .should('be.visible');
    });

    it('Get Error Message When Terms & Conditions are not Sellected', function(){
        // Click on the cart icon
        cy.get('a.cart-icon').click();

        // Click on the 'PROCEED TO CHECKOUT' button
        cy.contains('button', 'PROCEED TO CHECKOUT').click();

        // Click on the 'Place Order' button
        cy.contains('button', 'Place Order').click();

        // Select 'India' from the dropdown menu
        cy.get('select').select('India');

        // Click on the 'Proceed' button without accepting the terms and conditions
        cy.get('button').contains('Proceed').click();

        // Verify that the error message about terms and conditions appears
        cy.contains('Please accept Terms & Conditions - Required')
        .should('be.visible');
    })

    it('Get Error Message When Terms & Conditions are not Sellected - defect ID 3', function(){
        // Click on the cart icon
        cy.get('a.cart-icon').click();

        // Click on the 'PROCEED TO CHECKOUT' button
        cy.contains('button', 'PROCEED TO CHECKOUT').click();

        // Click on the 'Place Order' button
        cy.contains('button', 'Place Order').click();

        // Click on the checkbox with the class 'chkAgree'
        cy.get('input[type="checkbox"].chkAgree').click();

        // Click on the 'Proceed' button without accepting the terms and conditions
        cy.get('button').contains('Proceed').click();

        // Verify that the error message about terms and conditions appears
        cy.contains('Please enter country name - Required')
        .should('be.visible'); // Defect, the order is completed , but this should not be the case.An error message about country should have aSd
    })

});

