import { twoSum } from "./index";

test("should work in simple case", () => {
  expect(twoSum([1, 2, 3], 5)).toEqual([1, 2]);
});

test("should work with the same numbers", () => {
  expect(twoSum([3, 3], 6)).toEqual([0, 1]);
});

test("should work with negative numbers", () => {
  expect(twoSum([-4, 4, 12], 8)).toEqual([0, 2]);
});

test("should work with [3,2,4]", () => {
  expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
});
