/// <reference types="cypress" />
describe("Form test", () => {
  it("Can fill the form", () => {
    cy.visit("/");

    cy.get("form");
    cy.get('input[name="project-name"]')
      .type("Molly")
      .should("have.value", "Molly");

    cy.get("select").select("test test");
  });
});
