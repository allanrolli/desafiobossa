const supertest = require("supertest");
const app = require("../src/server");
const request = supertest(app);

describe("GET and POST test", () => {
  it("gets the test endpoint", async (done) => {
    const response = await request.get("/test");

    expect(response.status).toBe(200);
    expect(response.body.message).toBe("pass!");
    done();
  });

  it("gets the authenticate endpoint", async (done) => {
    const response = await request.post("/authenticate").send({
      email: "allan@teste.com",
      password: "123456",
    });
    expect(response.status).toEqual(200);
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
