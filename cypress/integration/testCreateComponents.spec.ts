/// <reference types="cypress" />

describe("Component test", () => {
  it("Can create update and remove components", () => {
    //visit member page and create a member
    cy.visit("/members");

    cy.get(".btn-member").click();
    //test closing button
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
    cy.get(".btn-add-member").click();

    //edit firstname of member
    cy.get(".dropdown-menu").find("button").first().click();
    cy.get(".btn-edit").click();
    cy.get('input[name="member-firstname"]')
      .clear()
      .type("Firstname")
      .should("have.value", "Firstname");
    cy.get(".btn-update-member").click();

    //add a second member
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
    cy.get(".btn-add-member").click();

    //delete second member
    cy.get(".dropdown-menu").find("button").eq(1).click();
    cy.get(".btn-remove").click();

    //visit home page and create/edit/remove projects
    cy.visit("/");

    cy.get(".btn-project").click();
    //test closing button
    cy.get(".btn-close-project").click();
    cy.get(".btn-project").click();
    cy.get(".form-project");
    cy.get('input[name="project-name"]')
      .type("Web")
      .should("have.value", "Web");
    cy.get(".selectField").click();
    cy.get(".dropdown-content").find(".select-item").first().click();
    cy.get('input[name="project-name"]').click();
    cy.get(".btn-add-project").click();

    //edit project name
    cy.get(".dropdown-menu").find("button").first().click();
    cy.get(".btn-edit").click();
    cy.get('input[name="project-name"]')
      .type(" Project")
      .should("have.value", "Web Project");
    cy.get(".btn-update-project").click();

    //add second project
    cy.get(".btn-project").click();
    cy.get(".form-project");
    cy.get('input[name="project-name"]')
      .type("Remove")
      .should("have.value", "Remove");
    cy.get(".selectField").click();
    cy.get(".dropdown-content").find(".select-item").eq(1).click();
    cy.get('input[name="project-name"]').click();
    cy.get(".btn-add-project").click();

    //remove second project
    cy.get(".dropdown-menu").find("button").eq(1).click();
    cy.get(".btn-remove").click();

    //visit board of project and create/update/remove columns and tasks
    cy.get(".projectLink").click();

    cy.get(".btn-column").click();
    cy.get(".form-column");
    cy.get('input[name="column-name"]').type("x").should("have.value", "x");
    cy.get(".btn-add-column").click();

    //edit column name
    cy.get(".dropdown-menu").find("button").first().click();
    cy.get(".btn-edit").click();
    cy.get('input[name="column-name"]')
      .clear()
      .type("Todo")
      .should("have.value", "Todo");
    cy.get(".btn-update-column").click();

    //add task to the column
    cy.get(".btn-task").click();
    //test closing button
    cy.get(".btn-close-task").click();
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

    //edit task
    cy.get(".dropdown-menu").find("button").eq(1).click();
    cy.get(".btn-edit").click();
    cy.get('input[name="task-name"]')
      .type(" React App")
      .should("have.value", "Create React App");
    cy.get(".btn-update-task").click();

    //create second column
    cy.get(".btn-column").click();
    //test closing button
    cy.get(".btn-close-column").click();
    cy.get(".btn-column").click();
    cy.get(".form-column");
    cy.get('input[name="column-name"]')
      .type("Done")
      .should("have.value", "Done");
    cy.get(".btn-add-column").click();

    //remove the second column
    cy.get(".dropdown-menu").find("button").eq(2).click();
    cy.get(".btn-remove").click();

    //remove the task from the first column
    cy.get(".dropdown-menu").find("button").eq(1).click();
    cy.get(".btn-remove").click();

    //go back to home page
    cy.get(".btn-back-home").click();
  });
});
