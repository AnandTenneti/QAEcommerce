import { test as base, expect } from "@playwright/test";
import { authFixtures } from "@fixtures/auth.fixtures";
import { pageFixtures } from "@fixtures/page.fixture";

export const test = base.extend(authFixtures).extend(pageFixtures);
export { expect };
