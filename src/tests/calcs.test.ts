import { expect, test } from "bun:test";
import { addition } from "../packages/calcs";

test("addition test", () => {
  const result = addition({
    first: 3,
    second: 25,
  });
  expect(result).toEqual(28);

  const failResult = addition({
    first: 10,
    second: 20,
  });
  expect(failResult).not.toBe(10);
});
