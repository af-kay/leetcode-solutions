/*
 * @lc app=leetcode id=19 lang=typescript
 *
 * [19] Remove Nth Node From End of List
 */

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
type Nullable<T> = null | T;

function removeNthFromEnd(head: Nullable<ListNode>, n: number): Nullable<ListNode> {
  const nodes: ListNode[] = [];
  for (let cursor = head; Boolean(cursor);) {
    nodes.push(cursor);
    cursor = cursor.next;
  }

  const nodeToDeleteIndex = nodes.length - n;
  if (nodes[nodeToDeleteIndex]) {
    nodes.splice(nodeToDeleteIndex, 1);
  }

  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];
    const actualNextNode = nodes[i+1] || null;

    node.next = actualNextNode;
  }

  return nodes[0] || null;
};
// @lc code=end

