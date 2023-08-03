/*
 * @lc app=leetcode id=57 lang=c
 *
 * [57] Insert Interval
 */

// @lc code=start
/**
 * Return an array of arrays of size *returnSize.
 * The sizes of the arrays are returned as *returnColumnSizes array.
 * Note: Both returned array and *columnSizes array must be malloced, assume
 * caller calls free().
 */
int **insert(int **intervals, int intervalsSize, int *intervalsColSize,
             int *newInterval, int newIntervalSize, int *returnSize,
             int **returnColumnSizes)
{



        return intervals;
}
// @lc code=end
#include <stdio.h>


int main() {
        int** intervals = malloc(sizeof(int) * 2 * 5);
        **intervals = 1;
        **(intervals + sizeof(int)) = 2;
        **(intervals + sizeof(int) * 2) = 3;
        **(intervals + sizeof(int) * 3) = 5;

        // [[1,2],[3,5],[6,7],[8,10],[12,16]]

        return 0;
}