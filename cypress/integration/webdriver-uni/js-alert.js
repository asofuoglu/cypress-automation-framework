/// <reference types="Cypress" />
describe('Handle JS alert', () => {
    it("Confirm js alert contains correct text", () => {
        cy.visit('https://webdriveruniversity.com/');
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click();
        cy.get('#button1').click();
        cy.on('window:alert', (str) => {  //alert i totmatic kabul eder ,text i boyle alırız.
            expect(str).to.equal('I am an alert box!')
        })
    })

    it("Confirm js alert contains correct text", () => {
        cy.visit('https://webdriveruniversity.com/');
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click();
        cy.get('#button4').click();
        cy.on('window:alert', (str) => {  //alert i totmatic kabul eder ,text i boyle alırız.
            return true;  //alert i Ok veya no demek için ,
        })
        cy.get('#confirm-alert-text').contains('You pressed OK!')
    })

    it.only("Confirm js alert slect NO contains correct text", () => {
        cy.visit('https://webdriveruniversity.com/');
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click();
        cy.get('#button4').click();
        cy.on('window:confirm', (str) => {  //alert i red için cofirm and return false
            return false;  // ,,false--NO
        })
        cy.get('#confirm-alert-text').contains('You pressed Cancel!')
    })

})