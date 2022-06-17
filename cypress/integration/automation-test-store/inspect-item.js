/// <reference types="Cypress" />
describe('Inspect Automation Test Store items using chain of commands', () => {
    it("Click on the first item using text", () => {
        cy.visit('https://automationteststore.com/');
        // cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .thumbnail > :nth-child(1) > img').click();
        cy.get('.prdocutname').contains('Skinsheen').click(); //text i contains eder 

    })

    it("Click on the first item using index", () => {
        cy.visit('https://automationteststore.com/');
        // cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .thumbnail > :nth-child(1) > img').click();
        //cy.get('.prdocutname').contains('Skinsheen').click(); //text i contains eder 
       // cy.get('.fixed_wrapper').find('.prdocutname').eq(13).click();   //güzel ornek
        cy.xpath("//div[@class='fixed_wrapper']/div/a").eq(0).click();
    })

    it.only("Click on the first item using text", () => {
        cy.visit('https://automationteststore.com/');
        // cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .thumbnail > :nth-child(1) > img').click();
        cy.get('.prdocutname').contains('Skinsheen').click().then(function(itemheaderText){
            console.log('selected the following item  : '+ itemheaderText.text())
        });
        
    })

})