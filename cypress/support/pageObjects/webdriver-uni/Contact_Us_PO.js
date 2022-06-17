class Contact_Us_PO {

    contactForm_Submission(firstName,lastName,email,comment,$selector,textToLocator){ //ilk ifade metodun adı sonra parametre,itareover a bak
        cy.get('[name="first_name"]').type(firstName);
        cy.get('[name="last_name"]').type(lastName);
        cy.get('[name="email"]').type(email);
        cy.get('textarea.feedback-input').type(comment);
        cy.get('[type="submit"]').click();
        cy.get($selector).contains(textToLocator);
        cy.screenshot("Made a contact us for submisson"); //screenshot with in projects folder screenshot
    }
    
}
export default Contact_Us_PO;