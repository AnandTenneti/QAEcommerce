# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: practice/apitest.spec.js >> UPDATE user with API key
- Location: tests/practice/apitest.spec.js:29:5

# Error details

```
ReferenceError: id is not defined
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | 
  3  | test("GET users with API key", async ({ request }) => {
  4  |   const response = await request.get("https://reqres.in/api/users?page=2", {
  5  |     headers: {
  6  |       "x-api-key": "reqres_7f47923d486446ea954624009ce33ff5", // or Authorization
  7  |     },
  8  |   });
  9  | 
  10 |   expect(response.status()).toBe(200);
  11 |   console.log(await response.json());
  12 | });
  13 | 
  14 | test("POST create user with API key", async ({ request }) => {
  15 |   const response = await request.post("https://reqres.in/api/users", {
  16 |     headers: {
  17 |       "x-api-key": "reqres_7f47923d486446ea954624009ce33ff5", // or Authorization
  18 |     },
  19 |     data: {
  20 |       name: "John Doe",
  21 |       job: "Software Engineer",
  22 |     },
  23 |   });
  24 |   console.log(await response.json());
  25 |   expect(response.status()).toBe(201);
  26 |   var id = (await response.json()).id;
  27 |   console.log("Created user ID: " + id);
  28 | });
  29 | test("UPDATE user with API key", async ({ request }) => {
> 30 |   const response = await request.put("https://reqres.in/api/users/" + id, {
     |                                                                       ^ ReferenceError: id is not defined
  31 |     headers: {
  32 |       "x-api-key": "reqres_7f47923d486446ea954624009ce33ff5", // or Authorization
  33 |     },
  34 |     data: {
  35 |       name: "Jane Doe",
  36 |       job: "Product Manager",
  37 |     },
  38 |   });
  39 | 
  40 |   expect(response.status()).toBe(200);
  41 |   console.log(await response.json());
  42 | });
  43 | 
  44 | test("DELETE user with API key", async ({ request }) => {
  45 |   const response = await request.delete("https://reqres.in/api/users/" + id, {
  46 |     headers: {
  47 |       "x-api-key": "reqres_7f47923d486446ea954624009ce33ff5", // or Authorization
  48 |     },
  49 |     
  50 |   });
  51 | 
  52 |   expect(response.status()).toBe(204);
  53 |   console.log("Deleted user ID: " + id);
  54 | });
```