/// <reference types="Cypress" />
describe('alidate webdriver uni homepage', () => {
    it("Confirm redirect to correct pages", () => {
        cy.visit('https://webdriveruniversity.com/');
        cy.get('#contact-us').invoke('removeAttr','target').click()
        cy.go('back')
        cy.reload()  //wait for page load
        cy.go('forward')
        cy.url().should('include','/Contact-Us/')  //assertion




    })
})