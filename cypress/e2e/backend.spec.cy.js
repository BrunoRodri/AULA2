/// <reference types="cypress"/>

describe("Testes de Back",() => {

  it("TC01 - Requisição GET",() => {
    cy.request("https://httpbin.org/get")
    .should(function(response){
      const { status, statusText } = response;
      expect(status).to.eq(200);
      expect(statusText).to.eq("OK");
    });
  })

  it("TC02 - Requisição POST",() => {
    cy.request({
      method: 'POST',
      url: 'https://httpbin.org/post',
      body: {
        name: 'Bruno',
        age: '28'
      }}).should(function(response){
        const { status, statusText } = response;
        expect(status).to.eq(200);
        expect(statusText).to.eq("OK");
      });
  });
  
})
  
