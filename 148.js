/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
    if (!head || !head.next) {
        return head
    }

    function merge(left, right) {
        if (!left) {
            return right
        }

        if (!right) {
            return left
        }

        if (left.val <= right.val) {
            left.next = merge(left.next, right)

            return left
        } else {
            right.next = merge(left, right.next)

            return right
        }
    }

    let slow = head
    let fast = head
    let prev = null

    while (fast && fast.next) {
        prev = slow
        slow = slow.next
        fast = fast.next.next
    }

    prev.next = null

    let left = sortList(head)
    let right = sortList(slow)

    return merge(left, right)
};