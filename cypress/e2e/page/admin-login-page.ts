export const loginPage = {
  login: () => {
    cy.visit("https://spoon-admin.x-studio.io/");
    cy.get("#\\:r0\\:").type("admin@itobuz.com");
    cy.get(":nth-child(3) > .flex > .w-full").clear();
    cy.get(":nth-child(3) > .flex > .w-full").type("Admin@1234");
    cy.get(".px-5").click();
  },
};
