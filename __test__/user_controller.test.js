const request = require("supertest");
const app = require("../src/router");
// describe("UserController test", () => {
//   it("has a module", () => {
//     expect(UserController).toBeDefined();
//   });
describe("Authentication", () => {
  it("should authenticate credentials", async () => {
    const response = await request(app)
      .post("/authenticate")
      .send({ email: "allan7@teste.com", password: "1234567" });
    expect(response.status).toBe(200);
  });
});
