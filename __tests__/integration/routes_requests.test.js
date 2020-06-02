const supertest = require("supertest");
const app = require("../../src/server");
const User = require("../../src/models/User");
const Tools = require("../../src/models/Tools");
const request = supertest(app);
var token = null;
var id = null;
var isValidTag = function (res) {
  res.body.should.have.property("node");
};
describe("All routes test", () => {
  beforeAll(async () => {
    await User.remove({});
  });
  beforeAll(async () => {
    await Tools.remove({});
  });
  afterAll(async () => {
    await User.remove({});
  });
  afterAll(async () => {
    await Tools.remove({});
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

  it("gets the authenticate endpoint", async (done) => {
    const response = await request.post("/authenticate").send({
      email: "allan100@teste.com",
      password: "1234567",
    });
    token = response.body.token;
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

  it("post tools", async (done) => {
    const response = await request
      .post("/tools")
      .set("Authorization", "Bearer " + token)
      .send({
        title: "json-server",
        link: "https://github.com/typicode/json-server",
        description:
          "Fake REST API based on a json schema. Useful for mocking and creating APIs for front-end devs to consume in coding challenges.",
        tags: ["api", "json", "schema", "node", "github", "rest"],
      });
    id = response.body._id;
    expect(response.status).toBe(201);
    done();
  });

  it("get all tools", async (done) => {
    const response = await request
      .get("/tools")
      .set("Authorization", "Bearer " + token);
    expect(response.status).toBe(200);
    expect(response.type).toBe("application/json");
    done();
  });

  it("get one tool", async (done) => {
    const response = await request
      .get("/tools?tags=node")
      .set("Authorization", "Bearer " + token);
    expect(response.status).toBe(200);
    expect(response.type).toBe("application/json");
    expect(isValidTag);
    done();
  });

  it("delete one tool", async (done) => {
    const response = await request
      .delete(`/tools/${id}`)
      .set("Authorization", "Bearer " + token);
    expect(response.status).toBe(204);
    done();
  });
});
