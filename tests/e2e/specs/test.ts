describe("Renders markdown", () => {
  beforeEach(() => {
    return cy.visit("/");
  });

  it("h1", () => {
    return cy.contains("h1", "h1 Heading");
  });
});
