/// <reference types="Cypress" />
describe('Verify dropdown', () => {
    it("Dropdown test", () => {
        cy.visit('https://webdriveruniversity.com/');
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click();//iframe den dolayı boyle

        cy.get('#dropdowm-menu-1').select('c#')
        cy.get('#dropdowm-menu-2').select('maven')
        cy.get('#dropdowm-menu-3').select('css')

        cy.get('#dropdowm-menu-3').should('have.value','css')
        cy.get('#dropdowm-menu-2').contains('Maven')

    })


})