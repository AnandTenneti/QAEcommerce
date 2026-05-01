import { test, expect } from "@playwright/test";
var id;
test.skip("GET users with API key", async ({ request }) => {
  const response = await request.get("https://reqres.in/api/users?page=2", {
    headers: {
      "x-api-key": "reqres_7f47923d486446ea954624009ce33ff5", // or Authorization
    },
  });

  expect(response.status()).toBe(200);
  console.log(await response.json());
});

test("POST create user with API key", async ({ request }) => {
  const response = await request.post("https://reqres.in/api/users", {
    headers: {
      "x-api-key": "reqres_7f47923d486446ea954624009ce33ff5", // or Authorization
    },
    data: {
      name: "John Doe",
      job: "Software Engineer",
    },
  });
  console.log(await response.json());
  expect(response.status()).toBe(201);
  var id = (await response.json()).id;
  console.log("Created user ID: " + id);
});
test("UPDATE user with API key", async ({ request }) => {
  const response = await request.put("https://reqres.in/api/users/" + id, {
    headers: {
      "x-api-key": "reqres_7f47923d486446ea954624009ce33ff5", // or Authorization
    },
    data: {
      name: "Jane Doe",
      job: "Product Manager",
    },
  });

  expect(response.status()).toBe(200);
  console.log(await response.json());
});

test("DELETE user with API key", async ({ request }) => {
  const response = await request.delete("https://reqres.in/api/users/" + id, {
    headers: {
      "x-api-key": "reqres_7f47923d486446ea954624009ce33ff5", // or Authorization
    },
  });
  expect(response.status()).toBe(204);
  console.log("Deleted user ID: " + id);
  });