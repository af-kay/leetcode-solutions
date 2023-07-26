/*
 * @lc app=leetcode id=98 lang=typescript
 *
 * [98] Validate Binary Search Tree
 */

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

// @lc code=start
function isValidBST(node: null | TreeNode): boolean {
  return Boolean(
    node &&
      (!node.left || (node.left.val < node.val && isValidBST(node.left))) &&
      (!node.right || (node.right.val > node.val && isValidBST(node.right)))
  );
}
// @lc code=end
