describe("LexStudy - Resumos", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:3000/resumos.html");
  });

  it("deve carregar a página de resumos", () => {
    cy.contains("Resumos Jurídicos").should("be.visible");
    cy.contains("Conteúdo teórico direto ao ponto").should("be.visible");
  });

  it("deve exibir as áreas do direito", () => {
    cy.contains("Direito Civil").should("be.visible");
    cy.contains("Direito Penal").should("be.visible");
    cy.contains("Direito Constitucional").should("be.visible");
    cy.contains("Direito do Trabalho").should("be.visible");
  });

  it("deve exibir conteúdo de Direito Civil", () => {
    cy.contains("Pessoa Natural e Capacidade Civil").should("be.visible");
    cy.contains("Responsabilidade Civil").should("be.visible");
    cy.contains("Negócio Jurídico e Vícios do Consentimento").should("be.visible");
  });

  it("deve abrir um accordion fechado", () => {
    cy.contains("Responsabilidade Civil").click();
    cy.contains("Responsabilidade civil é a obrigação de reparar danos").should("be.visible");
  });

  it("deve exibir conteúdo de Direito Penal", () => {
    cy.contains("Conceito Analítico de Crime").should("be.visible");
    cy.contains("Dolo e Culpa").should("be.visible");
    cy.contains("Iter Criminis").should("be.visible");
  });

  it("deve acessar diretamente a seção de Direito Penal pela âncora", () => {
    cy.visit("http://127.0.0.1:3000/resumos.html#penal");
    cy.url().should("include", "#penal");
    cy.contains("Direito Penal").should("be.visible");
  });
});