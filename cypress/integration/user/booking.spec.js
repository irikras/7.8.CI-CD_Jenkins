const selectors = require("../../fixtures/selectors.json");

describe("Check booking", () => {
  it("Should book a ticket", () => {
    cy.visit("http://qamid.tmweb.ru/client/index.php");
    cy.get(selectors.day).click();
    cy.get(selectors.time).click();
    cy.get(selectors.place).click();
    cy.contains("Забронировать").click();
    cy.contains("Получить код бронирования").click();
    cy.contains("Электронный билет").should("be.visible");
  });
});
