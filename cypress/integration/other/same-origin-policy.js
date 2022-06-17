/// <reference types="Cypress" />
describe('Cypress web security', () => {
    it("Validate visiting two diffrent domains", () => {
        cy.visit("https://webdriveruniversity.com/")
        //cy.visit("https://automationteststore.com/") //error same-- origin policy


    })

    it("Validate visiting two diffrent domains via user actions", () => {

        cy.visit("https://webdriveruniversity.com/");
        cy.get('#automation-test-store').invoke('removeAttr','target').click(); //error
      //use  "chromeWebSecurity" : false within the cypress.json file

    })
})