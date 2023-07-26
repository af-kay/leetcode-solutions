/*
 * @lc app=leetcode id=148 lang=typescript
 *
 * [148] Sort List
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// @lc code=start
function sortList(head: null | ListNode): null | ListNode {
  if (head === null) {
    return null;
  }

  const nodes: Array<ListNode> = [];
  let cursor: null | ListNode = head;

  while (cursor) {
    nodes.push(cursor);
    cursor = cursor.next;
  }

  nodes.sort((a, b) => {
    return a.val - b.val;
  });

  nodes.forEach((node, index) => {
    if (index + 1 < nodes.length) {
      node.next = nodes[index + 1];
    } else {
      node.next = null;
    }
  });

  return nodes[0];
}
// @lc code=end
