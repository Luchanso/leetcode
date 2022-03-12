// https://leetcode.com/problems/two-sum/

export function twoSum(nums: number[], target: number): number[] {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
      const data = map[target - nums[i]];
      if (data !== undefined) {
          return [data, i];
      }
      map[nums[i]] = i;
  }
};