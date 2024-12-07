/// <reference types="cypress"/>

describe("Testes de Front",() => {
  beforeEach(() => {
    cy.visit("https://ticket-box.s3.eu-central-1.amazonaws.com/index.html");
  });

  it("TC01 - Input First Name and Last Name",() => {
    const firstName = "Bruno";
    const lastName = "Rodrigues";
    const fullName = `${firstName} ${lastName}`

    cy.get("#first-name").type(firstName);
    cy.get("#last-name").type(lastName);
    cy.get(".agreement p").should('contain', `I, ${fullName}, wish to buy`);
  })

  it("TC02 - Compra de Ingressos Full",() => {
    const firstName = "Bruno";
    const lastName = "Rodrigues";
    const fullName = `${firstName} ${lastName}`;
    const email = "teste@gmail.com";
    const textFull = "teste teste teste teste teste teste teste" + " teste teste teste teste teste teste"

    cy.get("#first-name").type(firstName);
    cy.get("#last-name").type(lastName);
    cy.get("#email").type(email);
    cy.get("#ticket-quantity").select("2");
    cy.get("#vip").check();
    cy.get("#requests").type(textFull, {delay: 0});
    cy.get(".agreement p").should('contain', `I, ${fullName}, wish to buy`);
    cy.get("#agree").check();
    cy.get("button[type='submit']").click();
    cy.get(".success p").should("be.visible");
    cy.get(".success p").should('have.text', `Ticket(s) successfully ordered.`);
  })

  it("TC03 - Compra de Ingressos Full Otimizada",() => {
    cy.fillMandatoryFields();
    cy.get(".success p").should("be.visible");
    cy.get(".success p").should('have.text', `Ticket(s) successfully ordered.`);
  })


  
})