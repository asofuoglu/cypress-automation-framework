class AutoStore_HomePage_PO {

    accessHomePage(){
        cy.visit('https://automationteststore.com/');
    }
    clickOn_Haircare(){
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
    }

    
}
export default AutoStore_HomePage_PO;