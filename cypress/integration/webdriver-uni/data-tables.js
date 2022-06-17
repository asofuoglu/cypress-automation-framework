/// <reference types="Cypress" />

describe("HANDLING DATA", () => {
    beforeEach(() => {
        cy.visit("http://webdriveruniversity.com/");
        cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
    })

    it("Calculate total age", () => {
        var userDetails = [];
        let numb = 0;
        cy.get('#thumbnail-1 td').each(($el, index, $list) => {
            userDetails[index] = $el.text();

        }).then(() => {
            var i;
            for (i = 1; i < userDetails.length; i++) {
                if (Number(userDetails[i])) { //eger age Number sie topla,önemliii***
                    numb += Number(userDetails[i])
                }
                // cy.log(userDetails[i])
            }
            cy.log("Total age is : " + numb)
            expect(numb).to.eq0(322)
        })
    });

    it("Verify age according to Lastname", () => {
        var userDetails = [];
        let numb = 0;
        cy.get('#thumbnail-1 tr td:nth-child(2)').each(($el, index, $list) => {
            if ($el.text() == 'Smith') {
                cy.get('#thumbnail-1 tr td:nth-child(2)').eq(index).next().then(function (age) {//önemli function kullanımı
                    const userAge = age.text(); //next() bir sonraki td yani age olan
                    expect(userAge).to.eq("45");
                })
            }

        })
    })

    it.only("Verify age according to Lastname", () => {
        var userDetails = [];
        let numb = 0;
        cy.get('#thumbnail-1 tr td:nth-child(2)').each(($el, index, $list) => {
            if ($el.text() == 'Smith') {
                cy.get('#thumbnail-1 tr td:nth-child(2)').eq(index).prev().then(function (age) {
                    const userAge = age.text(); //next() bir öncekii td yani Firstname olan
                    expect(userAge).to.eq("John");
                })
            }

        })
    })
});



