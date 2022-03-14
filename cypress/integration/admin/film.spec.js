const selectors = require("../../fixtures/selectors.json");
const testData = require("../../fixtures/testData.json");

beforeEach(() => {
  cy.visit("/");
  cy.login("qamid@qamid.ru", "qamid");
  cy.contains("Идёмвкино");
});

describe("Film creating", () => {
  it("Should add film", () => {
    cy.createMovie(
      testData.movieTitle1,
      testData.movieTime1,
      testData.movieDescription1,
      testData.movieCountry1
    );
    cy.contains(testData.movieTitle1).should("be.visible");
  });
  it("Should add movie to schedule", () => {
    cy.get(selectors.movie).drag(selectors.grid);
  });
});