const hello = require("./hello");
describe("My hello", () => {
  test("works", () => {
    expect(hello.hello()).toEqual("Hola Mundo, desde Chile / 31-07-2023");
  });
});
