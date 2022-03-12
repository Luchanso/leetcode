import { lengthOfLongestSubstring } from "./index";

test("should work", () => {
  expect(lengthOfLongestSubstring("abcabcbb")).toEqual(3);
});

test("should work with repeated symbols", () => {
  expect(lengthOfLongestSubstring("bbbbb")).toEqual(1);
});

test("should work with pwwkew", () => {
  expect(lengthOfLongestSubstring("pwwkew")).toEqual(3);
});

test("should work with single symobl", () => {
  expect(lengthOfLongestSubstring(" ")).toEqual(1);
});

test("should work empty string", () => {
  expect(lengthOfLongestSubstring("")).toEqual(0);
});

test("should work two symbols", () => {
  expect(lengthOfLongestSubstring("au")).toEqual(2);
});

test('should work with "dvdf"', () => {
  expect(lengthOfLongestSubstring("dvdf")).toEqual(3);
});

test('should work with "abcd"', () => {
  expect(lengthOfLongestSubstring("abcd")).toEqual(4);
});
