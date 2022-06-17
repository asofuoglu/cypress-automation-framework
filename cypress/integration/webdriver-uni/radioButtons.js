/// <reference types="Cypress" />
describe('Verify radio buttons', () => {
    it("Radio buttons test", () => {
        cy.visit('https://webdriveruniversity.com/');
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click();//iframe den dolayı boyle

        cy.get('#radio-buttons').find("[type='radio']").first().check();
        cy.get('#radio-buttons').find("[type='radio']").eq(1).check();
    })

    it.only("Radio buttons test2", () => {
        cy.visit('https://webdriveruniversity.com/');
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click();//iframe den dolayı boyle

        cy.get("[value='lettuce']").should('not.be.checked')
        cy.get("[value='pumpkin']").should('be.checked')
        cy.get("[value='cabbage']").should('be.disabled')


    })
})