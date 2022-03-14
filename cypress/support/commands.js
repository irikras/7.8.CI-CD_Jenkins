import "cypress-file-upload";
import "@4tw/cypress-drag-drop";

const selectors = require("../fixtures/selectors.json");
const filepath = "../../cypress/fixtures/images/poster.png";

Cypress.Commands.add("login", (login, password) => {
  cy.get(selectors.loginMail).type(login);
  cy.get(selectors.loginPass).type(password);
  cy.get(selectors.loginButton).click();
});

Cypress.Commands.add("checkIfElementInvalid", (selector) => {
  cy.get(selector)
    .then(($el) => $el[0].checkValidity())
    .should("be.false");
});

Cypress.Commands.add("createHall", (hallName) => {
  cy.get(selectors.createHall).click();
  cy.get(selectors.nameHall).type(hallName);
  cy.get(selectors.addHallButton).click();
});

Cypress.Commands.add("deleteHall", (hallName) => {
  cy.get(`#hall-control [data-hall-name=${hallName}]`).click();
  cy.get(selectors.deleteHallButton).click();
  cy.on("window:confirm", () => true);
});

Cypress.Commands.add("changeHall", (hallName, rows, places) => {
  cy.get(`#hall-configuration [value=${hallName}]`).click();
  cy.get(selectors.rows).clear().type(rows);
  cy.get(selectors.places).clear().type(places);
  cy.get(selectors.buttonSaveHallConfiguration).click();
});

Cypress.Commands.add("createMovie", (title, time, description, country) => {
    cy.get(selectors.buttonAddMovie).click();
    cy.get(selectors.movieTitle).type(title);
    cy.get(selectors.movieTime).type(time);
    cy.get(selectors.movieDescription).type(description);
    cy.get(selectors.movieCountry).type(country);
    cy.get(selectors.buttonDownloadPoster).click().attachFile(filepath);
    cy.get(selectors.buttonAddFilm).click();
  });

Cypress.Commands.add("makeVIP", (hallName, rows, places) => {
  cy.get(`#hall-configuration [value=${hallName}]`).click();
  cy.get(
    `.conf-step__hall-wrapper > :nth-child(${rows}) > :nth-child(${places})`
  ).click();
  cy.get(selectors.buttonSaveHallConfiguration).click();
});

Cypress.Commands.add("changePrice", (hallName, regular, vip) => {
  cy.get(`#price-configuration [value=${hallName}]`).click();
  cy.get(selectors.priceRegular).clear().type(regular);
  cy.get(selectors.priceVIP).clear().type(vip);
  cy.get(selectors.buttonSavePriceConfiguration).click();
});

Cypress.Commands.add("openSales", (hallName) => {
  cy.get(`#start-sales [value=${hallName}]`).click();
  cy.contains("Открыть продажу билетов").click();
  cy.contains("Продажа билетов открыта!!!").should("be.visible");
});

Cypress.Commands.add("closeSales", (hallName) => {
  cy.get(`#start-sales .conf-step__selectors-box [value=${hallName}]`).click();
  cy.contains("Закрыть продажу билетов").click();
  cy.contains("Все готово к открытию").should("be.visible");
});

Cypress.Commands.add("deleteMovie", (name) => {
  cy.get(`#grid-session [data-film-name=${name}]`).click();
  cy.get(selectors.deleteHallButton).click();
  cy.on("window:confirm", () => true);
});