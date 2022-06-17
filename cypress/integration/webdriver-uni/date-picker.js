/// <reference types="Cypress" />

describe("DATE PICKERS", () => {
    beforeEach(() => {
        cy.visit("http://webdriveruniversity.com/");
        cy.get("#datepicker").invoke("removeAttr", "target").click({ force: true });

    })

    it("Date picker example", () => {
        let date = new Date();
        // date.setDate(date.getDate());//get current day ,---- now day22
        //  cy.log(date.getDate())
        //  date = new Date();
        // date.setDate(date.getDate() + 5);// cuurent day + 5 ----day27
        // cy.log(date.getDate())

        var futureYear = date.getFullYear();
        var futureMonth = date.toLocaleString("default", { month: "long" });
        var futureDay = date.getDate();

        cy.log("Future year : " + futureYear)
        cy.log("Future month : " + futureMonth)
        cy.log("Future day : " + futureDay)
    });
});



