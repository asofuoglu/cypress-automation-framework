/// <reference types="Cypress" />
describe('Mouse actions', () => {
    it("Scroll actions", () => {
        cy.visit('https://webdriveruniversity.com/');
        cy.get('#actions').scrollIntoView();
        cy.get('#actions').invoke('removeAttr', 'target').click();//iframe den dolayı boyle

    })

    it("Drag & Drop", () => {   //drag and drop
        cy.visit('https://webdriveruniversity.com/');
        cy.get('#actions').scrollIntoView();
        cy.get('#actions').invoke('removeAttr', 'target').click();//iframe den dolayı boyle
        cy.get('#draggable').trigger('mousedown',{which: 1})//center of the element which -1
        cy.get('#droppable').trigger('mousemove').trigger('mouseup',{force: true})
    })

    it("Double click", () => {   //double click
        cy.visit('https://webdriveruniversity.com/');
        cy.get('#actions').scrollIntoView();
        cy.get('#actions').invoke('removeAttr', 'target').click();
        cy.get('#double-click').dblclick().then(($element) =>{
            expect($element).to.have.class('div-double-click double') //class attr check
        });
    })

    it("Click and Hold", () => {   //click and hold
        cy.visit('https://webdriveruniversity.com/');
        cy.get('#actions').scrollIntoView();
        cy.get('#actions').invoke('removeAttr', 'target').click();
        cy.get('#click-box').trigger('mousedown',{which: 1}).then(($element) =>{
            expect($element).to.have.css('background-color','rgb(0, 255, 0)') //backgroun color verify
        });
       
    })
})