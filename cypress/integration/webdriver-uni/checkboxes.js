/// <reference types="Cypress" />
describe('Verify checkboxes', () => {
    beforeEach(() => { //or beforeEach(function() {-----})
       // cy.visit('/');  //baseUrl kullanımı , Cypress.json da
       cy.navigateTo_Webdriveruni_HomePage() //commands in order to go URL 
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click();//iframe den dolayı boyle
    })

    it("Checkboxes test", () => {
        // cy.get('#checkboxes > label > input').check();
        cy.get('#checkboxes > :nth-child(1) > input').check();
        cy.get('#checkboxes > :nth-child(1) > input').check().should('be.checked') / assert

        cy.get('#checkboxes > :nth-child(1) > input').as('option1')
        cy.get('@option1').check();
        cy.get('@option1').check().should('be.checked')

    })

    it("Checkboxes test-2", () => {
        cy.get('#checkboxes > :nth-child(5) > input').as('option3')
        cy.get('@option3').uncheck().should('not.be.checked')  //uncheck a checkbox
    })

    it("MultipleCheckboxes test-2", () => {
        cy.get("input[type ='checkbox']").check(["option-1", "option2", "option3", "option4"]).should('be.checked')

    })
})