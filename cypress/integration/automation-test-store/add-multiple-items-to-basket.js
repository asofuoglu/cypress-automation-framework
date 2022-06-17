import AutoStore_HomePage_PO from'../../support/pageObjects/automation-test-store/AutoStore_HomePage_PO';
import AutoStore_Haircare_PO from'../../support/pageObjects/automation-test-store/AutoStore_Haircare_PO';

/// <reference types="Cypress" />
describe("Add to basket", () => {
    const autostore_homepage = new AutoStore_HomePage_PO();
    const autostore_haircare = new AutoStore_Haircare_PO();
    before(function () {
        cy.fixture('product').then(function (data) {
            //this.data = data;  //example json daki bilgileri kullanmak için
            globalThis.data = data; //üstteki çalışmazsa bunu dene
        })
    })

    beforeEach(() => { //or beforeEach(function() {-----})
       autostore_homepage.accessHomePage();
       autostore_homepage.clickOn_Haircare();
    })
    it("Add specific items to basket", () => {
      globalThis.data.productName.forEach(function(element){ //fixtures dan list of product çek
        autostore_haircare.addProductToBasket(element)
        })
    cy.get('.dropdown-toggle > .fa').click(); //click cart to see 3 products
    });
});
