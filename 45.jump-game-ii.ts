/*
 * @lc app=leetcode id=45 lang=typescript
 *
 * [45] Jump Game II
 */

// @lc code=start
function nullifyDeadJumps(nums: number[]): number[] {
  let index = 0;
  const result = [...nums];

  while (index < nums.length) {
    const numJumps = nums[index];
    let jumpsLeft = numJumps;

    while (jumpsLeft) {
      const num = nums[index + (numJumps - jumpsLeft)];

      jumpsLeft--;
    }
    index++;
  }
}

function jump(nums: number[]): number {
  const [firstJump] = nums;

  const jumpsLeft = firstJump;
  const results = [];
  while (jumpsLeft) {
    const index = 0 
  }
  

  return -1;
};
// @lc code=end

