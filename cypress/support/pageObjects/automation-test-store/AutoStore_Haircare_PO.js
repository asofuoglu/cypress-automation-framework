class AutoStore_Haircare_PO {

   addProductToBasket(productName){ //ilk ifade metodun adı sonra parametre,itareover a bak
        cy.get("div.fixed > a.prdocutname").each(($el, index, $list) => {
            if ($el.text().includes(productName)) {
                //  $el.click();// bu jquery method bize cy method lazım onun için wrap kullan
               cy.log($el.text())
               cy.wrap($el).click();  //product details page
               cy.get('.cart').click(); //add to basket
               cy.get("a[href*='product/category&path=']").contains("Hair Care").click();  //return bask for other product
    //NEW COMMENT
            }
        });
    }

    
}
export default AutoStore_Haircare_PO;