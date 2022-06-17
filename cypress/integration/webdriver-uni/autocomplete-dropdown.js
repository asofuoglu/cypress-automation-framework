/// <reference types="Cypress" />


describe('Auto complete 1', () => {
    it("Dropdown test", () => {
        cy.visit('https://webdriveruniversity.com/');
        cy.get('#autocomplete-textfield').invoke('removeAttr', 'target').click();//iframe den dolayı boyle
        cy.get('#myInput').type("A");

        cy.get('#myInputautocomplete-list > *').each(($el, index, $list) => {//for each gibi
            const product = $el.text();
            const productToSelect = 'Avacado'
            if (product == productToSelect) {//aadıgımız eleman ise click
                $el.click();
                cy.get('#submit-button').click();
                cy.url().should('include',productToSelect) //url verify
            }
        })
    })

    it("Auto complete 2", () => {//usttekini then() ile yapılısı
        cy.visit('https://webdriveruniversity.com/');
        cy.get('#autocomplete-textfield').invoke('removeAttr', 'target').click();//iframe den dolayı boyle
        cy.get('#myInput').type("A");

        cy.get('#myInputautocomplete-list > *').each(($el, index, $list) => {//for each gibi
            const product = $el.text();
            const productToSelect = 'Avacado'
            if (product == productToSelect) {//aadıgımız eleman ise click
               // $el.click();----deprecated altakini kullan,üstü çizili olur
               $el.trigger("click")
                cy.get('#submit-button').click();
                cy.url().should('include',productToSelect) //url verify
            }
        }).then(() => {  //then ile aynı testin devamı.
            cy.get('#myInput').type("G");

            cy.get('#myInputautocomplete-list > *').each(($el, index, $list) => {//for each gibi
                const product = $el.text();
                const productToSelect = 'Greapes'
                if (product == productToSelect) {//aadıgımız eleman ise click
                    $el.click();
                    cy.get('#submit-button').click();
                    cy.url().should('include',productToSelect)
                }
        })
    
    })
    })
    })
