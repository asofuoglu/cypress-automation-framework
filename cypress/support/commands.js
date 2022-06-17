// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
Cypress.Commands.add("selectProduct", productName => { //ilk ifade metodun adı sonra parametre,itareover a bak
    cy.get("div.fixed > a.prdocutname").each(($el, index, $list) => {
        if ($el.text().includes(productName)) {
            //  $el.click();// bu jquery method bize cy method lazım onun için wrap kullan
            cy.wrap($el).click(); //with wrap we use cypress method..click method is cy method burda.

        }
    });
})

Cypress.Commands.add("webderiverUni_ContactFormSubmission", (firstName,lastName,email,comment,$selector,textToLocator) => { //ilk ifade metodun adı sonra parametre,itareover a bak
    cy.get('[name="first_name"]').type(firstName);
    cy.get('[name="last_name"]').type(lastName);
    cy.get('[name="email"]').type(email);
    cy.get('textarea.feedback-input').type(comment);
    cy.get('[type="submit"]').click();
    cy.get($selector).contains(textToLocator);
})

Cypress.Commands.add("addProductToBasket", productName => { //ilk ifade metodun adı sonra parametre,itareover a bak
    cy.get("div.fixed > a.prdocutname").each(($el, index, $list) => {
        if ($el.text().includes(productName)) {
            //  $el.click();// bu jquery method bize cy method lazım onun için wrap kullan
           cy.log($el.text())
           cy.wrap($el).click();  //product details page
           cy.get('.cart').click(); //add to basket
           cy.get("a[href*='product/category&path=']").contains("Hair Care").click();  //return bask for other product

        }
    });
})

Cypress.Commands.add("navigateTo_Webdriveruni_HomePage",() => {
    cy.visit("/");
})





// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
