/*
 * @lc app=leetcode id=24 lang=typescript
 *
 * [24] Swap Nodes in Pairs
 */

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

function swapPairs(head: null | ListNode): null | ListNode {
  let cursor = head;

  while (cursor && cursor.next) {
    // swap
    cursor.val = [cursor.next.val, cursor.next.val = cursor.val][0];

    cursor = cursor.next?.next;
  }

  return head;
};
// @lc code=end

