// https://leetcode.com/problems/merge-two-sorted-lists/
// Definition for singly-linked list.
export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}


function mergeStep(list1: ListNode, list2: ListNode, resultList: ListNode) {
  // console.log({list1, list2, resultList});
  if (list1 === null) {
    resultList.val = list2.val;
    resultList.next = list2.next;
    return;
  }

  if (list2 === null) {
    resultList.val = list1.val;
    resultList.next = list1.next;
    return;
  }

  resultList.next = new ListNode();

  if (list1.val <= list2.val) {
    resultList.val = list1.val;
    return mergeStep(list1.next, list2, resultList.next);
  } else {
    resultList.val = list2.val;
    return mergeStep(list1, list2.next, resultList.next);
  }

}


export function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  const resultList = new ListNode();

  if (list1 === null && list2 === null) {
    return null;
  }
  if (list1 === null) {
    return list2;
  }
  if (list2 === null) {
    return list1;
  }

  mergeStep(list1, list2, resultList);

  return resultList;
}
