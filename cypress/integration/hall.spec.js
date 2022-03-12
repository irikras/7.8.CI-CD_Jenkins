const testData = require("../fixtures/testData.json");

beforeEach(() => {
  cy.visit("/");
  cy.login("qamid@qamid.ru", "qamid");
  cy.contains("Идёмвкино");
});

describe("Hall creating", () => {
  it("Should create hall", () => {
    cy.createHall(testData.hallName1);
  });
  it("Should change seats", () => {
    cy.changeHall(testData.hallName1, testData.rows1, testData.seats1);
  });
  it("Should make VIP seats", () => {
    cy.makeVIP(testData.hallName1, 3, 3);
  });
  it("Should change price", () => {
    cy.changePrice(
      testData.hallName1,
      testData.priceRegular,
      testData.priceVIP
    );
  });
  it("Should open sales", () => {
    cy.openSales(testData.salesHall);
  });
  it("Should close sales", () => {
    cy.closeSales(testData.salesHall);
  });
  it("Should delete hall", () => {
    cy.deleteHall(testData.hallName1);
  });
});
