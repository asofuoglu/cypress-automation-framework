import HomePage_PO from '../../support/pageObjects/webdriver-uni/Homepage_PO'
import Contact_Us_PO from '../../support/pageObjects/webdriver-uni/Contact_Us_PO'
/// <reference types="Cypress" />
describe('Test Contact Us from via webdriverUni', () => {
    Cypress.config('defaultCommandTimeout',20000); //burdaki tüm metodlar için genel bi wait ayrıca tek bitr metodun içinede yazabiliriz{timeout:8000}
    const homepage_PO = new HomePage_PO(); //class create ler buraya
    const contactus_PO = new Contact_Us_PO();
    before(function () {
        cy.fixture('example').then(function (data) {//calışmadı fixture
            //this.data = data;  //example json daki bilgileri kullanmak için
            globalThis.data = data; //üstteki çalışmazsa bunu dene
        })
    })
    beforeEach(function () {
        // use global URL ,CYPRESS .JSON DA tanımlı ,runtime da command ile de kullanılabilir
        //cy.visit(Cypress.env("webdrivernui_homepage")+"/Contact-Us/contactus.html");
        homepage_PO.visitHomepage();
        homepage_PO.clickOn_ContactUs();

    })
    it("Should be able to submit a succesfull", () => {

        //cypress code
        //** */./node_modules/.bin/cypress run **headless mode from terminal run
        // **./node_modules/.bin/cypress run **headed test runner acılır.
        //**./node_modules/.bin/cypress run --browser chrome **chrome daaaça
        //** */./node_modules/.bin/cypress run --spec cypress/integration/webdriver-uni/contact-us.js**individual test
        cy.title().should('include', 'WebDriver | Contact Us'); // include contains gibi
        //burda new tab sorunu invoke('removeattr','target').click() ile çözülür
        cy.url().should('include', 'https://webdriveruniversity.com/Contact-Us/contactus.html');
        cy.url().should('include', 'contactus.html',{timeout:8000});// include contains gibi ve wait for Assertion
        // cy.webderiverUni_ContactFormSubmission(data.first_name, data.last_name, data.email, data.body, 'h1', 'Thank You for your Message!');
        contactus_PO.contactForm_Submission(data.first_name, data.last_name, data.email, data.body, 'h1', 'Thank You for your Message!');
    })

    it("Should not be able to submit a succesfull", () => {
        //commands daki metodu kullandık
        cy.webderiverUni_ContactFormSubmission(data.first_name, data.last_name, " ", data.body, 'body', 'Error');
    })
})