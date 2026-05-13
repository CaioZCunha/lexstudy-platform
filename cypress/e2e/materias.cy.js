describe("LexStudy - Matérias", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:3000/materias.html");
  });

  it("deve carregar a página de matérias", () => {
    cy.contains("Disciplinas de Direito").should("be.visible");
    cy.contains("Selecione a área do Direito").should("be.visible");
  });

  it("deve exibir as matérias disponíveis", () => {
    cy.contains("Direito Civil").should("be.visible");
    cy.contains("Direito Penal").should("be.visible");
    cy.contains("Constitucional").should("be.visible");
    cy.contains("Direito do Trabalho").should("be.visible");
  });

  it("deve abrir o resumo de Direito Civil", () => {
    cy.contains("Estudar Civil").click();
    cy.url().should("include", "resumos.html#civil");
  });

  it("deve abrir o resumo de Direito Penal", () => {
    cy.contains("Estudar Penal").click();
    cy.url().should("include", "resumos.html#penal");
  });

  it("deve abrir o resumo de Direito Constitucional", () => {
    cy.contains("Estudar Const.").click();
    cy.url().should("include", "resumos.html#constitucional");
  });

  it("deve abrir o resumo de Direito do Trabalho", () => {
    cy.contains("Estudar Trabalho").click();
    cy.url().should("include", "resumos.html#trabalho");
  });
});