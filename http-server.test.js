const hello = require("./http-server.js");
describe("My hello", () => {
  test("works", () => {
    expect(hello.hello()).toEqual("Hello World");
  });
});