describe("Renders markdown", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("h1", () => {
    cy.contains("h1", "h1 Heading");
  });
});
