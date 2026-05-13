describe("LexStudy - Páginas principais", () => {
  const paginas = [
    "/",
    "/materias.html",
    "/resumos.html",
    "/quiz.html",
    "/flashcards.html"
  ];

  paginas.forEach((pagina) => {
    it(`deve carregar a página ${pagina}`, () => {
      cy.visit(`http://127.0.0.1:3000${pagina}`);
      cy.get("body").should("be.visible");
      cy.contains("LexStudy").should("be.visible");
    });
  });
});