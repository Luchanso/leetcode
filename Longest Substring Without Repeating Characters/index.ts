// https://leetcode.com/problems/longest-substring-without-repeating-characters/

export function lengthOfLongestSubstring(s: string): number {
  if (s.length === 0) {
    return 0;
  }

  const map = {};
  let maxLength = 0;
  let slow = 0;
  let fast = 0;

  for (let i = 0; i < s.length; i++) {
    while (map[s[i]] >= 0) {
      delete map[s[slow]];
      slow++;
    }
    if (map[s[i]] === undefined) {
      map[s[i]] = 1;
      fast++;
    }
    const diff = (fast - slow);
    maxLength = diff > maxLength ? diff : maxLength;

    // console.log({
    //   maxLength,
    //   slow,
    //   fast,
    //   map,
    // });
  }

  return maxLength;
};
