class HomePage_PO {

    visitHomepage(){
        cy.visit(Cypress.env("webdrivernui_homepage"),{timeout:60000}); //specific timeout for this test
    }
    clickOn_ContactUs(){
        cy.get('#contact-us').invoke('removeAttr', 'target').click();
    }
}
export default HomePage_PO;