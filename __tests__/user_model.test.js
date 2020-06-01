const { MongoClient } = require("mongodb");

describe("insert", () => {
  let connection;
  let db;

  beforeAll(async () => {
    connection = await MongoClient.connect(global.__MONGO_URI__, {
      useNewUrlParser: true,
    });
    db = await connection.db(global.__MONGO_DB_NAME__);
  });

  afterAll(async () => {
    await connection.close();
    await db.close();
  });

  it("should insert a doc into collection", async () => {
    const users = db.collection("users");

    const mockUser = {
      name: "Allan2",
      email: "allan7@teste.com",
      password: "1234567",
    };
    await users.insertOne(mockUser);

    const insertedUser = await users.findOne({ email: "allan7@teste.com" });
    expect(insertedUser).toEqual(mockUser);
  });
});
