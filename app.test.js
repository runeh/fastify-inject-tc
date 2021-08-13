const app = require("./app");

it("should return the same URL as passed in", async () => {
  const res = await app.inject({
    method: "GET",
    url: "//foo",
  });

  expect(res.body).toEqual({ url: "//foo" });
});
