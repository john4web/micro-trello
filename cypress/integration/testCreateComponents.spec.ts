import "cypress-file-upload";
/// <reference types="cypress" />

describe("Component test", () => {
  const dataTransfer = new DataTransfer();
  it("Can create update and remove components", () => {
    //create a member
    cy.visit("/members");
    cy.get(".btn-member").click();
    cy.get(".btn-close-member").click();
    cy.get(".btn-member").click();

    cy.get(".form-member");
    cy.get('input[name="member-firstname"]')
      .type("xxx")
      .should("have.value", "xxx");

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

    cy.get(".dropdown-menu").find("button").first().click();
    cy.get(".btn-edit").click();
    cy.get('input[name="member-firstname"]')
      .clear()
      .type("Firstname")
      .should("have.value", "Firstname");
    cy.get(".btn-update-member").click();

    cy.get(".btn-member").click();

    cy.get(".form-member");
    cy.get('input[name="member-firstname"]')
      .type("Member2")
      .should("have.value", "Member2");

    cy.get('input[name="member-lastname"]')
      .type("Lastname")
      .should("have.value", "Lastname");

    cy.get('input[name="member-job"]')
      .type("Job2")
      .should("have.value", "Job2");

    cy.get('input[name="member-skill"]')
      .type("Skill2")
      .should("have.value", "Skill2");

    cy.get("input[type=file]").attachFile({
      filePath: "testPicture.jpg",
      encoding: "utf-8",
    });
    cy.get(".btn-add-member").click();
    cy.get(".dropdown-menu").find("button").eq(1).click();
    cy.get(".btn-remove").click();

    //visit home page and create/edit/remove projects
    cy.visit("/");
    cy.get(".btn-project").click();
    cy.get(".form-project");

    cy.get('input[name="project-name"]')
      .type("Web")
      .should("have.value", "Web");
    cy.get(".selectField").click();
    cy.get(".dropdown-content").find(".select-item").first().click();
    cy.get('input[name="project-name"]').click();
    cy.get(".btn-add-project").click();

    cy.get(".dropdown-menu").find("button").first().click();
    cy.get(".btn-edit").click();
    cy.get('input[name="project-name"]')
      .type(" Project")
      .should("have.value", "Web Project");
    cy.get(".btn-update-project").click();

    cy.get(".btn-project").click();
    cy.get(".form-project");
    cy.get('input[name="project-name"]')
      .type("Remove")
      .should("have.value", "Remove");

    cy.get(".selectField").click();
    cy.get(".dropdown-content").find(".select-item").eq(1).click();
    cy.get('input[name="project-name"]').click();
    cy.get(".btn-add-project").click();
    cy.get(".dropdown-menu").find("button").eq(1).click();
    cy.get(".btn-remove").click();

    //visit board of project and create a column and task
    cy.get(".projectLink").click();

    cy.get(".btn-column").click();
    cy.get(".form-column");
    cy.get('input[name="column-name"]').type("x").should("have.value", "x");

    cy.get(".btn-add-column").click();

    cy.get(".dropdown-menu").find("button").first().click();
    cy.get(".btn-edit").click();
    cy.get('input[name="column-name"]')
      .clear()
      .type("Todo")
      .should("have.value", "Todo");
    cy.get(".btn-update-column").click();

    cy.get(".btn-task").click();
    cy.get(".form-task");
    cy.get('input[name="task-name"]')
      .type("Create")
      .should("have.value", "Create");

    cy.get(".selectField").click();
    cy.get(".dropdown-content").find(".select-item").first().click();
    cy.get('input[name="task-name"]').click();
    cy.get('input[name="task-deadline"]')
      .type("2021-04-16")
      .should("have.value", "2021-04-16");

    cy.get('[type="radio"].task-priority').first().check();

    cy.get(".btn-add-task").click();

    cy.get(".dropdown-menu").find("button").eq(1).click();
    cy.get(".btn-edit").click();
    cy.get('input[name="task-name"]')
      .type(" React App")
      .should("have.value", "Create React App");
    cy.get(".btn-update-task").click();

    cy.get(".btn-column").click();
    cy.get(".form-column");
    cy.get('input[name="column-name"]')
      .type("Done")
      .should("have.value", "Done");

    cy.get(".btn-add-column").click();

    //test drag&drop feature for tasks
    dataTransfer.setData("source", "drag");
    console.log(dataTransfer);
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

    cy.get(".dropdown-menu").find("button").eq(2).click();
    cy.get(".btn-remove").click();

    cy.get(".dropdown-menu").find("button").eq(1).click();
    cy.get(".btn-remove").click();

    //go back to home page
    cy.get(".btn-back-home").click();
  });
});
