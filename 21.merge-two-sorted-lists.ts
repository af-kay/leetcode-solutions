/*
 * @lc app=leetcode id=21 lang=typescript
 *
 * [21] Merge Two Sorted Lists
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

function sortNodesByValue(nodes: ListNode[]) {
  nodes.sort((a, b) => (a.val < b.val ? -1 : 1));
}

// Sorted already
function mergeTwoLists(
  aHead: Nullable<ListNode>,
  bHead: Nullable<ListNode>
): Nullable<ListNode> {
  if (!aHead) return bHead;
  if (!bHead) return aHead;

  const heads: ListNode[] = [aHead, bHead];
  const nodes: ListNode[] = [];

  heads.forEach((head) => {
    let cursor: Nullable<ListNode> = head;

    while (cursor) {
      nodes.push(cursor);
      cursor = cursor.next;
    }
  });
  sortNodesByValue(nodes);

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
