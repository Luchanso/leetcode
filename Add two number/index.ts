// https://leetcode.com/problems/add-two-numbers/
// Definition for singly-linked list.
export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}


export function addTwoNumbers(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  const resultList = new ListNode();
  let current = resultList;
  let counter = 0;
  let nextIncrement = 0;

  while (list1?.next || list2?.next || list1?.val > 0 || list2?.val > 0) {
    let sum = (list1?.val || 0) + (list2?.val || 0);

    if (nextIncrement > 0) {
      sum += nextIncrement;
      nextIncrement = 0;
    }

    if (sum >= 10) {
      current.val = sum - 10;
      nextIncrement = 1;
    } else {
      current.val = sum;
    }

    // console.log({
    //    "list1.val": list1?.val,
    //    "list2.val": list2?.val,
    //    "current.val": current?.val,
    //    nextIncrement,
    //    sum
    // })

    if (list1?.next || list2?.next) {
      current.next = new ListNode();
    }
    if (!list1?.next && !list2?.next && nextIncrement > 0) {
      current.next = new ListNode(nextIncrement);
    }

    list1 = list1?.next;
    list2 = list2?.next;
    current = current.next;

    if (counter > 100) {
      break;
    }
  }

  // console.log(JSON.stringify(resultList, null, 2));

  return resultList;
}
