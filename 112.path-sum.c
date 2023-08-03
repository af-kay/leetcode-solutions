/*
 * @lc app=leetcode id=112 lang=c
 *
 * [112] Path Sum
 */

struct TreeNode {
        int val;
        struct TreeNode* left;
        struct TreeNode* right;
};

// @lc code=start
#include <stdbool.h>
#include <memory.h>

bool hasPathSum(struct TreeNode* root, int targetSum) {
        if (root == NULL) {
                return false;
        }
        const int valLeft = targetSum - root->val;

        if (root->left == NULL && root->right == NULL && !valLeft) {
                return true;
        }

        return hasPathSum(root->left, valLeft) || hasPathSum(root->right, valLeft);
}
// @lc code=end
