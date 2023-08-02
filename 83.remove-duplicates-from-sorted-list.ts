/*
 * @lc app=leetcode id=83 lang=typescript
 *
 * [83] Remove Duplicates from Sorted List
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
type Nullable<T> = null | T;

function deleteDuplicates(
  head: Nullable<ListNode>
): Nullable<ListNode> {
  for (let cursor = head; cursor; ) {
    const next = cursor.next;

    if (next?.val === cursor.val) {
      cursor.next = next.next;
    } else {
      cursor = cursor.next;
    }
  }

  return head;
}
// @lc code=end
