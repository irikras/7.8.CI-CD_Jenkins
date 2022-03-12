describe("Pet store test", () => {
  it("Should add user", () => {
    cy.request({
      method: "POST",
      url: "https://petstore.swagger.io/v2/user",
      body: {
        id: 678,
        username: "iam",
        firstName: "fff",
        lastName: "lll",
        email: "mail@com",
        password: "password",
        phone: "12345678",
        userStatus: 1,
      },
    }).then((response) => {
      cy.log(JSON.stringify(response.body));
      expect(response.status).to.eq(200);
      expect(response.body.message).to.eq("678");
    });
  });
  it("Should edit user", () => {
    cy.request({
      method: "PUT",
      url: "https://petstore.swagger.io/v2/user/iam",
      body: {
        id: 789,
        username: "iam",
        firstName: "fff",
        lastName: "lll",
        email: "mail@com",
        password: "pass",
        phone: "12345678",
        userStatus: 1,
      },
    }).then((response) => {
      cy.log(JSON.stringify(response.body));
      expect(response.status).to.eq(200);
      expect(response.body.message).to.eq("789");
    });
  });
  it("Should delete user", () => {
    cy.request({
      method: "DELETE",
      url: "https://petstore.swagger.io/v2/user/iam",
    }).then((response) => {
      cy.log(JSON.stringify(response.body));
      expect(response.status).to.eq(200);
      expect(response.body.message).to.eq("iam");
    });
  });
});