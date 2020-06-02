const index = require("./server");
const server = require("http").Server(index);

server.listen(process.env.PORT || 3000);
