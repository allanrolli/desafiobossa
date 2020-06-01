const mongoose = require("mongoose");
const User = require("../models/User");
mongoose.connect(process.env.MONGO_URL);

describe("User model test", () => {
  beforeAll(async () => {
    await User.remove({});
  });

  afterEach(async () => {
    await User.remove({});
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  it("has a module", () => {
    expect(User).toBeDefined();
  });
});
