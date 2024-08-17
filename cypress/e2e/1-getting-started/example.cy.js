describe("Buscar en google", () => {
  beforeEach(() => {
    cy.visit("https://www.google.com");
  });

  it("displays two todo items by default", () => {
    cy.get("#APjFqb").should("be.empty");
  });
  it("search input", () => {
    const searchText = "scaramouche genshin impact";

    cy.get("#APjFqb").type(`${searchText}`);

    cy.get(".FPdoLc > center > .gNO89b").click();
  });
});
