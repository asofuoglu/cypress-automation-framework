/// <reference types="cypress" />

describe("HOOKS", () => {
   before(() =>{
       cy.log("runs before all")
   })

   after(() =>{
    cy.log("runs after all")
})

beforeEach(() =>{
    cy.log("runs before each")
})

afterEach(() =>{
    cy.log("runs after each")
})

it("test-1",() =>{
    cy.log("this is Test-1")
})
it("test-2",() =>{
    cy.log("this is Test-2")
})
})