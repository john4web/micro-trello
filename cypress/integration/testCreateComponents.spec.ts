import "cypress-file-upload";
/// <reference types="cypress" />
const dataTransfer = new DataTransfer();

describe("Form test", () => {
  it("Can fill the form", () => {
    cy.visit("/members");
    cy.get(".btn-member").click();
    cy.get(".btn-close-member").click();
    cy.get(".btn-member").click();

    cy.get(".form-member");

    cy.get('input[name="member-firstname"]')
      .type("Firstname")
      .should("have.value", "Firstname");

    cy.get('input[name="member-lastname"]')
      .type("Lastname")
      .should("have.value", "Lastname");

    cy.get('input[name="member-job"]').type("Job").should("have.value", "Job");

    cy.get('input[name="member-skill"]')
      .type("Skill")
      .should("have.value", "Skill");

    cy.get("input[type=file]").attachFile({
      filePath: "testPicture.jpg",
      encoding: "utf-8",
    });
    cy.get(".btn-add-member").click();

    cy.visit("/");
    cy.get(".btn-project").click();
    cy.get("form");
    cy.get('input[name="project-name"]')
      .type("Web Project")
      .should("have.value", "Web Project");

    cy.get(".selectField").click();
    cy.get(".dropdown-content").find(".select-item").first().click();
    cy.get('input[name="project-name"]').click();
    cy.get(".btn-add-project").click();
    cy.get(".projectLink").click();

    cy.get(".btn-column").click();
    cy.get("form");
    cy.get('input[name="column-name"]')
      .type("Todo")
      .should("have.value", "Todo");

    cy.get(".btn-add-column").click();
    cy.get(".btn-task").click();
    cy.get("form");
    cy.get('input[name="task-name"]')
      .type("Create React App")
      .should("have.value", "Create React App");

    cy.get(".selectField").click();
    cy.get(".dropdown-content").find(".select-item").first().click();
    cy.get('input[name="task-name"]').click();
    cy.get('input[name="task-deadline"]')
      .type("2021-04-16")
      .should("have.value", "2021-04-16");

    cy.get('[type="radio"].task-priority').first().check();

    cy.get(".btn-add-task").click();

    cy.get(".btn-column").click();
    cy.get("form");
    cy.get('input[name="column-name"]')
      .type("Done")
      .should("have.value", "Done");

    cy.get(".btn-add-column").click();

    cy.get(".draggable")
      .trigger("mousedown", { which: 1 })
      .trigger("dragstart", { dataTransfer })
      .trigger("drag", {});

    cy.get(".droppable")
      .eq(1)
      .trigger("dragover", { dataTransfer })
      .trigger("drop", { dataTransfer })
      .trigger("dragend", { dataTransfer })
      .trigger("mouseup", { which: 1 });
    cy.wait(8000);

    cy.get(".btn-back-home").click();
    cy.get(".btn-dropdown").click();
    cy.get(".btn-edit").click();
    cy.get('input[name="project-name"]')
      .type("New Project")
      .should("have.value", "New Project");
    cy.get(".btn-update-project").click();
    cy.get(".btn-remove").click();
  });
});
