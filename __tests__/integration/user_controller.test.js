const supertest = require("supertest");
const app = require("../../src/server");
const request = supertest(app);
var token = null;
describe("GET and POST test", () => {
  it("gets the authenticate endpoint", async (done) => {
    const response = await request.post("/authenticate").send({
      email: "allan@teste.com",
      password: "123456",
    });
    token = response.body.token;
    done();
  });

  it("post more users", async (done) => {
    const response = await request
      .post("/user")
      .set("Authorization", "Bearer " + token)
      .send({
        name: "Allan15",
        email: "allan15@teste.com",
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
    //expect({ list });
    done();
  });
});

// describe("UserController test", () => {
//   it("has a module", () => {
//     expect(UserController).toBeDefined();
//   });
// });

//   describe("Authentication", () => {
//     it("should authenticate credentials", async (req, res) => {
//       const response = await request(app)
//         .post("/authenticate")
//         .send({ email: "allan7@teste.com", password: "1234567" });

//       expect(response.status).toBe(200);
//     });
//   });
// describe("list users test", () => {
//   it("lists Users", () => {
//     const MockModel = {
//       find: sinon.spy(),
//     };
//     const userController = UserController.MockModel();
//     userController.find();
//     const expected = true;
//     const actual = MockModel.find.calledOnce;
//     expect(actual).toEqual(expected);
//   });
//   // });
// });
