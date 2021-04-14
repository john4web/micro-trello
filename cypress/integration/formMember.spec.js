import "cypress-file-upload";
/// <reference types="cypress" />

describe("Form test", () => {
  it("Can fill the form", () => {
    cy.visit("/members");
    cy.get(".btn-member").click();
    cy.get(".btn-close-member").click();
    cy.get(".btn-member").click();

    cy.get("form");

    cy.get('input[name="member-firstname"]')
      .type("Molly")
      .should("have.value", "Molly");

    cy.get('input[name="member-lastname"]')
      .type("Molly")
      .should("have.value", "Molly");

    cy.get('input[name="member-job"]')
      .type("Molly")
      .should("have.value", "Molly");

    cy.get('input[name="member-skill"]')
      .type("Molly")
      .should("have.value", "Molly");

    cy.fixture("testPicture.jpg").then((fileContent) => {
      cy.get('input[type="file"]').attachFile({
        fileContent: fileContent.toString(),
        fileName: "testPicture.jpg",
        mimeType: "image/jpg",
      });
    });

    cy.get(".btn-add-member").click();
    cy.visit("/");
    cy.get(".btn-project").click();
    cy.get("form");
    cy.get('input[name="project-name"]')
      .type("Molly")
      .should("have.value", "Molly");

    cy.get("MultiSelect").contains("Molly Molly").click();

    cy.get(".btn-add-project").click();

    cy.get(".btn-column").click();
    cy.get("form");
    cy.get('input[name="column-name"]')
      .type("Molly")
      .should("have.value", "Molly");

    cy.get(".btn-add-column").click();
  });
});
