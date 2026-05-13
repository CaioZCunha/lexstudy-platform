describe("LexStudy - Home", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:3000/");
  });

  it("deve carregar a página inicial", () => {
    cy.contains("LexStudy").should("be.visible");
    cy.contains("Domine a Doutrina e a Jurisprudência").should("be.visible");
  });

  it("deve exibir os links principais do menu", () => {
    cy.contains("Resumos").should("be.visible");
    cy.contains("Quizzes").should("be.visible");
    cy.contains("Flashcards").should("be.visible");
    cy.contains("Sobre").should("be.visible");
  });

  it("deve exibir os cards principais de estudo", () => {
    cy.contains("Resumos Direcionados").should("be.visible");
    cy.contains("Quizzes Interativos").should("be.visible");
    cy.contains("Flashcards").should("be.visible");
  });

  it("deve navegar para a página de matérias pelo botão Começar a Estudar", () => {
    cy.contains("Começar a Estudar").click();
    cy.url().should("include", "materias.html");
  });

  it("deve navegar para a página de resumos pelo card", () => {
    cy.contains("Acessar Resumos").click();
    cy.url().should("include", "resumos.html");
  });

  it("deve navegar para a página de quiz pelo card", () => {
    cy.contains("Fazer um Quiz").click();
    cy.url().should("include", "quiz.html");
  });

  it("deve navegar para a página de flashcards pelo card", () => {
    cy.contains("Treinar Flashcards").click();
    cy.url().should("include", "flashcards.html");
  });
});