/// <reference types="Cypress" />


describe("Traversing DOM elements in Cypress", () => {
  beforeEach(() => {
    cy.visit("http://webdriveruniversity.com/");
    cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
  })
  it("children() to get the children of DOM elements", () => {
    cy.get('.traversal-breadcrumb').children('.active').should('contain', 'Contact Us')// css . kısmi locator ile kullandık
  });

  it("closest() to validate the closest ancestor DOM element", () => {
    cy.get('.traversal-badge').closest('ul').should('have.class', 'list-group') //en yakındaki parent yada child ul e gitti
  });

  it("eq() to retrieve a specific element based on index", () => {
    cy.get('.traversal-drinks-list').children().eq(2).should('contain', 'Milk');  // eq içine index yaz
    //cy.get('.traversal-drinks-list > *')..eq(2).click();  ---diger yontem
  });

  it("filter() to retrieve DOM elements that match a specific selector", () => {
    cy.get('.btn-group-toggle').children().filter('.active').should('contain', 'Button-1');
    cy.get('.btn-group-toggle').children().filter('.active').click()
  });

  it("find() to retrieve DOM elements of a given selector", () => {
    cy.get('.traversal-pagination').find('li').find('a').should('have.length', 7) //kac tane elemnt oldugu ,size()
  });

  it("first() to retrieve the first DOM element within elements ", () => {
    cy.get('.traversal-table > tbody > tr').first().should('contain','Andy')
  });

  it("last() to retrieve the last DOM element within elements", () => {
    cy.get('.traversal-table > tbody > tr > td').last().should('contain','Scott')
  });

  it("nextAll() to get all of the next sibling DOM elements within elements", () => {
    cy.get('.traversal-drinks-list').children().eq(1).nextAll().should('have.length',3)
  });

  it("nextUntil() to get all of the next sibling DOM elements within elements until another element", () => {
    cy.get('.traversal-drinks-list').children().eq(0).nextUntil('#sugar').should('have.length',3) //???
  });

  it("not() to remove DOM element(s) from the set of elements", () => {
    cy.get('.traversal-button-states > button').not('.disabled').should('not.have.class','disabled').should('have.length',3)
    //class ında disable yazanlar haric aldık.not contains gibi ve sayısın aldım
  });

  it("parent() To get parent DOM element of elements", () => {
    cy.get('.traversal-mark').parent().should('contain','Lorem ipsum')
  });

  it("parents() to get parents DOM element of elements", () => {
    cy.get('.traversal-cite').parents().should('match','footer') //parentları arasındaki tag i verify ettik.
  });

  it("prev() to get the previous sibling DOM element within elements", () => {
    //cy.get('.traversal-drinks-list').children().eq(3).prev().should('contain','Milk')
    cy.get('.traversal-drinks-list').children().eq(3).prev().contains('Milk')
  });

  it("prevAll() to get all previous sibling DOM elements within elements", () => {
    cy.get('.sales').prevAll().should('have.length',2)  //2 adet previos u var
  });

  it("prevUntil() to get all previous sibling DOM elements within elements until other element", () => {
    cy.get('#veggie').prevUntil('#fruits').should('have.length', 5)
  });

  it.only("siblings() To get all sibling DOM elements of elements", () => {
    cy.get('button.active').siblings().should('have.length', 3)
  });
});
