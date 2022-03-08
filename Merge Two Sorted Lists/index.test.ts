import { ListNode, mergeTwoLists } from ".";

test("should work", () => {
  const l1 = new ListNode(1, new ListNode(2, new ListNode(4)));
  const l2 = new ListNode(1, new ListNode(3, new ListNode(4)));
  const l3 = new ListNode(
    1,
    new ListNode(
      1,
      new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(4))))
    )
  );

  expect(mergeTwoLists(l1, l2)).toEqual(l3);
});

test("should work with single list elements ", () => {
  expect(mergeTwoLists(new ListNode(2), new ListNode(1))).toEqual(
    new ListNode(1, new ListNode(2))
  );
});

test("should work with null", () => {
  expect(mergeTwoLists(null, null)).toEqual(null);
});
