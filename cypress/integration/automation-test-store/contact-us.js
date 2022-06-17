/// <reference types="Cypress" />
describe('Test Contact Us from via Automation Test Store', () => {
    before(function () {
        cy.fixture('example').then(function (data) {//calışmadı fixture
            //this.data = data;  //example json daki bilgileri kullanmak için
            globalThis.data = data; //üstteki çalışmazsa bunu dene
        })
    })
    it("Should be able to submit a succesfull", () => {
        cy.visit('https://automationteststore.com/');
        cy.xpath("//a[contains(@href,'contact')]").click().then(function (linkText) {
            //linkText locatordaki element, onun text ini aldık Jquery methodu ile.
            cy.log("Clicked on link text  :" + linkText.text())
        });
        cy.get('#ContactUsFrm_first_name').type(data.first_name);
        cy.get('#ContactUsFrm_email').type(data.email);
        cy.get("#ContactUsFrm_enquiry").type(data.name);
        cy.get("button[title='Submit']").click();
        cy.xpath("//p[contains(text(),'Your')]").should('have.text', 'Your enquiry has been successfully sent to the store owner!');
        console.log('here the log');//ilk bu çalısır async 
        cy.log('test completed');// bunu kullan sync için
    })

})