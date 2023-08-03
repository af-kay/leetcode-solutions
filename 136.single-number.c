/*
 * @lc app=leetcode id=136 lang=c
 *
 * [136] Single Number
 */

// @lc code=start
int singleNumber(int* nums, int numsSize)
{
        int result = 0;

        for (int i = 0; i < numsSize; i++)
                result ^= nums[i];

        return result;
}
// @lc code=end
#include <printf.h>

int main() {
        int nums[] = { 1, 2, 3, 5, 1, 5, 3 };
        int nums_size = sizeof(nums) / sizeof(int);

        printf("%d\n", singleNumber(nums, nums_size));
}
