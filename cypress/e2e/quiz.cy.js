describe("LexStudy - Quiz", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:3000/quiz.html");
  });

  it("deve carregar a página de quiz", () => {
    cy.contains("LexStudy").should("be.visible");
    cy.get("#quiz-area").should("be.visible");
  });

  it("deve exibir uma pergunta", () => {
    cy.get("#pergunta-texto")
      .should("be.visible")
      .and("not.contain", "Carregando pergunta...");
  });

  it("deve exibir alternativas", () => {
    cy.get("#alternativas-area button").should("have.length.greaterThan", 0);
  });

  it("deve permitir responder uma alternativa", () => {
    cy.get("#alternativas-area button").first().click();
  });

  it("deve exibir o progresso do quiz", () => {
    cy.get("#progresso").should("be.visible");
  });

  it("deve finalizar o quiz após responder todas as perguntas", () => {
    function responderAteFinalizar() {
      cy.get("body").then(($body) => {
        if ($body.find("#resultado-area:not(.d-none)").length > 0) {
          cy.get("#resultado-area").should("be.visible");
          cy.contains("Fim do Quiz!").should("be.visible");
        } else {
          cy.get("#alternativas-area button").first().click();
          cy.wait(500);
          responderAteFinalizar();
        }
      });
    }

    responderAteFinalizar();
  });
});