/// <reference types="Cypress" />
describe("Iterate over elements", () => {
    beforeEach(() => { //or beforeEach(function() {-----})
        cy.visit('https://automationteststore.com/');
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
    })
    it("Log information of all Hair cae products", () => {
        cy.get("div.fixed > a.prdocutname").each(($el, index, $list) => {
            cy.log("Index :" + index + " : " + $el.text())
            cy.log($list.length);
        });


    });

    it("Add a specific product to basket", () => {

       // cy.get("div.fixed > a.prdocutname").each(($el, index, $list) => {
         //   if ($el.text().includes("Curls to straight Shampoo")) {
                //  $el.click();// bu jquery method bize cy method lazım onun için wrap kullan
             //   cy.wrap($el).click(); //with wrap we use cypress method..click method is cy method burda.

           // }
       // });
       cy.selectProduct("Curls to straight Shampoo");

    })

    it("Add a specific product to basket 2", () => {
       cy.selectProduct("EAU PARFUMEE AU THE VERT SHAMPOO");

    })
})