import "cypress-file-upload";
/// <reference types="cypress" />

describe("Form test", () => {
  it("Can fill the form", () => {
    cy.visit("/members");

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

    /*cy.fixture("testPicture.png").then((fileContent) => {
      cy.get('input[type="file"]').attachFile({
        fileContent: fileContent.toString(),
        fileName: "testPicture.png",
        mimeType: "image/png",
      });
    });*/
  });
});
