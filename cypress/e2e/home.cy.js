describe("LexStudy - Home", () => {
  it("deve carregar a página inicial", () => {
    cy.visit("http://127.0.0.1:5500/");
    cy.contains("LexStudy").should("be.visible");
  });
});