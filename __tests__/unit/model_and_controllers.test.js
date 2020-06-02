const User = require("../../src/models/User");
const Tool = require("../../src/models/Tools");
const UserController = require("../../src/controllers/UserController");
const ToolConrtoller = require("../../src/controllers/ToolController");

describe("Modules test", () => {
  it("has a module User", () => {
    expect(User).toBeDefined();
  });

  it("has a module Tool", () => {
    expect(Tool).toBeDefined();
  });

  it("has a module UserController", () => {
    expect(UserController).toBeDefined();
  });

  it("has a module UserController", () => {
    expect(ToolConrtoller).toBeDefined();
  });
});
