/// <reference types="Cypress" />
describe('Handling iframe & Modals', () => {
    it("Hnadle iframes", () => {
        cy.visit('https://webdriveruniversity.com/');
        cy.get('#iframe').invoke('removeAttr', 'target').click();//iframe part
        cy.get('#frame').then($iframe => {
            const body = $iframe.contents().find('body')
            cy.wrap(body).as('iframe')  //alias ,cy metodlaro için wrap yap kullan wtih @ ,le
        })
        cy.get('@iframe').find('#button-find-out-more').click();//modal part like alert text ini aldık.
        cy.get('@iframe').find('div.modal-content').as('modal')
        cy.get('@modal').should(($expedtedText) => {  //jquery func. get text()
            const text = $expedtedText.text()
            expect(text).to.include('Welcome to webdriveruniversity.com')//assert modal text
           
        })
        cy.get('@modal').contains('Close').click();  //text i Close iceren, hover over yap
    })

})





