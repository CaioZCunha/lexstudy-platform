describe("LexStudy - Flashcards", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:3000/flashcards.html");
  });

  it("deve carregar a página de flashcards", () => {
    cy.contains("Flashcards de Revisão").should("be.visible");
    cy.contains("Clique na carta para ver a resposta").should("be.visible");
  });

  it("deve exibir a área dos flashcards", () => {
    cy.get("#flashcards-grid").should("exist");
  });

  it("deve carregar pelo menos um flashcard", () => {
    cy.get(".flashcard-container").should("have.length.greaterThan", 0);
  });

  it("deve virar um flashcard ao clicar", () => {
    cy.get(".flashcard-container").first().click();
    cy.get(".flashcard-container").first().should("have.class", "virado");
  });

  it("deve voltar o flashcard ao clicar novamente", () => {
    cy.get(".flashcard-container").first().click();
    cy.get(".flashcard-container").first().should("have.class", "virado");

    cy.get(".flashcard-container").first().click();
    cy.get(".flashcard-container").first().should("not.have.class", "virado");
  });
});