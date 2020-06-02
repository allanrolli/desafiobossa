const supertest = require("supertest");
const app = require("../../src/server");
const request = supertest(app);
var token = null;
describe("GET and POST test", () => {
  it("gets the authenticate endpoint", async (done) => {
    const response = await request.post("/authenticate").send({
      email: "allan@teste.com",
      password: "1234567",
    });
    token = response.body.token;
    done();
  });

  it("post more users", async (done) => {
    const response = await request
      .post("/user")
      .set("Authorization", "Bearer " + token)
      .send({
        name: "Allan100",
        email: "allan100@teste.com",
        password: "1234567",
      });
    expect(response.status).toBe(201);
    done();
  });

  it("get all users", async (done) => {
    const response = await request
      .get("/user")
      .set("Authorization", "Bearer " + token);
    expect(response.status).toBe(200);
    expect(response.type).toBe("application/json");
    done();
  });
});
