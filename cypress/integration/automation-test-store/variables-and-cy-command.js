/// <reference types="Cypress" />
describe("Verifying variables, cypress commands and Jquery commands", () => {
    it("Navigating to speecific product page", () => {
        cy.visit('https://automationteststore.com/');
        //dynamic locator for products just last id si different
        // const makeupLink = cy.get("a[href*='product/category&path=']").contains("Makeup")
        // makeupLink.click();
        // const skinClearLink = cy.get("a[href*='product/category&path=']").contains("Skincare")
        // skinClearLink.click();
        //order execution is not guerantee so use below one.
        cy.get("a[href*='product/category&path=']").contains("Makeup").click();
        cy.get("a[href*='product/category&path=']").contains("Skincare").click();

    })

    it("Navigating to speecific product page", () => {
        cy.visit('https://automationteststore.com/');
        cy.get("a[href*='product/category&path=']").contains("Makeup").click();
        const header = cy.get("span.maintext").should('have.text', "Makeup")
        // cy.log(header.text());//jquery bu sekilde calışmaz promises sart yani then()
        cy.get("span.maintext").then(($headaerText) => {
            const hedaertTEXT = $headaerText.text();
            cy.log("Found hedaer text :" + hedaertTEXT)
            expect(hedaertTEXT).is.eq("Makeup")

        });

    })
    it.only("Validate properties of Contact us PAGE", () => {
        cy.visit('https://automationteststore.com/index.php?rt=content/contact');
        //aynı sonuca cıkan 3 farklı method
        //Uses cypress commands chaining
        cy.contains('#ContactUsFrm', 'Contact Us Form').find('#field_11').should('contain', 'First name')

        //Jquery Approach
        cy.contains('#ContactUsFrm', 'Contact Us Form').then(text => {
            const firstNameText = text.find('#field_11').text();
            expect(firstNameText).to.contain('First');
        })
        //Embeded COMMANDS -Closure
        cy.get('#field_11').then(fnText => {
            cy.log(fnText.text())
            cy.log(fnText)
        })

    });



})