const UserController = require("../src/controllers/UserController");
const request = require("supertest");
const app = require("../src/router");

describe("UserController test", () => {
  it("has a module", () => {
    expect(UserController).toBeDefined();
  });
});

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
