// const mongoose = require("mongoose");
// const User = require("../src/models/User");
// mongoose.connect(process.env.MONGO_URL);

// describe("User model test", () => {
//   beforeAll(async () => {
//     await User.remove({});
//   });

//   afterEach(async () => {
//     await User.remove({});
//   });

//   afterAll(async () => {
//     await mongoose.connection.close();
//   });

//   it("has a module", () => {
//     expect(User).toBeDefined();
//   });

//   describe("get user", () => {
//     it("gets a user", async () => {
//       const user = new User({
//         name: "Allan2",
//         email: "allan7@teste.com",
//         password: "1234567",
//       });
//       await user.save();

//       const foundUser = await User.findOne({
//         email: "allan7@teste.com",
//       });
//       const expected = "allan7@teste.com";
//       const actual = foundUser.email;
//       expect(actual).toEqual(expected);
//     });
//   });

//   describe("save user", () => {
//     it("saves a user", async () => {
//       const user = new User({
//         name: "Allan2",
//         email: "allan7@teste.com",
//         password: "1234567",
//       });

//       const savedUser = await user.save();
//       const expected = "allan7@teste.com";
//       const actual = savedUser.email;
//       expect(actual).toEqual(expected);
//     });
//   });
// });
