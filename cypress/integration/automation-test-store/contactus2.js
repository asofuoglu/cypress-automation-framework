/// <reference types="Cypress" />
describe('Test Contact Us from via Automation Test Store', () => {
    before(function () {
        cy.fixture('userDetails').as("user") //with alias fixture    
    })
    it("Should be able to submit a succesfull", () => {
        cy.visit('https://automationteststore.com/');
        cy.xpath("//a[contains(@href,'contact')]").click().then(function (linkText) {
            //linkText locatordaki element, onun text ini aldık Jquery methodu ile.
            cy.log("Clicked on link text  :" + linkText.text())
        });
        cy.get("@user").then((user) => { //alias kullanarak data provider
        cy.get('#ContactUsFrm_first_name').type(user.first_mame);
        cy.get('#ContactUsFrm_email').type(user.email);
       // cy.pause();  pause for debugging
    })
        
        cy.get("#ContactUsFrm_enquiry").type("test emquiry test");
        cy.get("button[title='Submit']").click();
        cy.xpath("//p[contains(text(),'Your')]").should('have.text', 'Your enquiry has been successfully sent to the store owner!');
        console.log('here the log');//ilk bu çalısır async 
        cy.log('test completed');// bunu kullan sync için
    })

})