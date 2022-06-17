/// <reference types="Cypress" />
describe("Iterate over elements", () => {
    it("Log information of all Hair cae products", () => {
        cy.visit('https://automationteststore.com/');
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click();

        //first product text i al variable a ata as() icindeki
        cy.get("div.fixed > a.prdocutname").eq(0).invoke('text').as('productThumnail');
        cy.get('@productThumnail').its('length').should('be.gt', 5);//length buyultur 5 greater than
        cy.get('@productThumnail').should('include', "Seaweed Conditioner");
    });

    it("Get number of products", () => {
        cy.visit('https://automationteststore.com/');

        cy.get("div.thumbnail").as('productthumbnail');
        cy.get('@productthumbnail').should('have.length', 16);//list teki total number,size()

        cy.get('@productthumbnail').find('.productcart').invoke('attr', 'title').as('title')
        cy.get('@title').should('include', "Add to Cart");
        //why we didnt use as() here,,same thing
        cy.get('@productthumbnail').find('.productcart').invoke('attr', 'title').should('include', "Add to Cart");
    });

    it.only("Calculate total of normal and sale products", () => {
        cy.visit('https://automationteststore.com/');
        cy.get("div.thumbnail  div.oneprice").as('productNormalPrice');
        cy.get('@productNormalPrice').each(($el, index, $list) => {
            cy.log($el.text());//burda wrap yok cunku click gibi cy metodları için kullanırız

            //2.yol for ile
            //buraa ilk normal price ı topladık sonra indirimli ve genel toplam assert
            var priceTotal = 0;
            cy.get('.thumbnail').find('.oneprice').invoke('text').as('itemPrice')
            cy.get('@itemPrice').then($linkText => {
                var itemPrice = $linkText.split('$');//array ve split 
                var i;
                var itemTotalPrice1 = 0;//0 ata ki number olsun yoksa hata
                for (let i = 0; i < itemPrice.length; i++) {
                    cy.log(itemPrice[i])
                    itemTotalPrice1 += Number(itemPrice[i])  //casting string to number
                }
                priceTotal+=itemTotalPrice1
                cy.log("total price :" + itemTotalPrice1)
            })
//indirimli price total
            cy.get('.thumbnail').find('.pricenew').invoke('text').as('itemPrice')
            cy.get('@itemPrice').then($linkText => {
                var itemPrice = $linkText.split('$');//array ve split 
                var i;
                var itemTotalPrice = 0;//0 ata ki number olsun yoksa hata
                for (let i = 0; i < itemPrice.length; i++) {
                    cy.log(itemPrice[i])
                    itemTotalPrice += Number(itemPrice[i])  //casting string to number
                }
                cy.log("total price :" + itemTotalPrice)
                priceTotal+=itemTotalPrice;
            }).then(() => {    //then sonrası tekrar then
                cy.log("total price of all item   :"+priceTotal)
                expect(priceTotal).to.equal(648.5);
            })

        })
        //veya soyle ---> cy.get("div.thumbnail").as('productthumbnail');
        // cy.get('@productthumbnail').find('.oneprice').each(($el,index,$list) => {

    })
})