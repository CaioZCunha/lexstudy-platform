describe("LexStudy - Home", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:3000/index.html");
  });

  it("deve carregar a página inicial", () => {
    cy.contains("LexStudy").should("be.visible");
    cy.contains("Domine a Doutrina e a Jurisprudência").should("be.visible");
  });
});