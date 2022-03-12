const selectors = require("../fixtures/selectors.json");

it("Should login to the main page", () => {
  cy.visit("http://qamid.tmweb.ru/admin");
  cy.login("qamid@qamid.ru", "qamid");
  cy.get("h1.page-header__title").contains("Идёмвкино");
});

beforeEach(() => {
  cy.visit("/");
});

describe("Authorization", () => {
  it("Should open page", () => {
    cy.contains("Авторизация");
  });

  it("Should successfully login", () => {
    cy.login("qamid@qamid.ru", "qamid");
    cy.contains("Идёмвкино");
  });

  it("Should not login with empty login", () => {
    cy.get(selectors.loginPass).type("qamid");
    cy.contains("Авторизоваться").click();
    cy.checkIfElementInvalid('[for="email"] > .login__input');
  });

  it("Should not login with empty password", () => {
    cy.get(selectors.loginMail).type("qamid@qamid.ru");
    cy.contains("Авторизоваться").click();
    cy.checkIfElementInvalid('[for="pwd"] > .login__input');
  });
});
