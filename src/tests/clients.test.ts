import { expect, test } from "bun:test";
import { TestClient } from "../packages/clients";

test("client test", () => {
  const name = "太郎";
  const testClient = new TestClient(name);
  const result = testClient.getName();
  expect(result).toBe(name);

  const suffix = "さん";
  const expectResultWithSuffix = `${name}${suffix}`;
  testClient.options({ suffix });
  expect(testClient.getName()).toBe(expectResultWithSuffix);
});
