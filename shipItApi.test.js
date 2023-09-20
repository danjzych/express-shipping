"use strict";

const {
  shipProduct,
} = require("./shipItApi");

const fetchMock = require ("fetch-mock");

test("shipProduct", async function () {
  fetchMock.post("http://localhost:3001/ship", {
    body: {
      "receipt": {
        itemId: 1,
        name: "dog",
        addr: "123 Street",
        zip: "12345",
        shipId: 123
    },
    status: 200
    }
  })


  const shipId = await shipProduct({
    productId: 1000,
    name: "Test Tester",
    addr: "100 Test St",
    zip: "12345-6789",
  });

  expect(shipId).toEqual(123);
});
