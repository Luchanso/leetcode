import { ListNode, addTwoNumbers } from ".";

test("should work", () => {
  const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
  const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));
  const l3 = new ListNode(7, new ListNode(0, new ListNode(8)));

  expect(addTwoNumbers(l1, l2)).toEqual(l3);
});

test("should correct work with zeros", () => {
  const l1 = new ListNode();
  const l2 = new ListNode();
  const l3 = new ListNode();

  expect(addTwoNumbers(l1, l2)).toEqual(l3);
});

test("should correct add", () => {
  const l1 = new ListNode(
    9,
    new ListNode(
      9,
      new ListNode(
        9,
        new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))))
      )
    )
  );
  const l2 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))));
  const l3 = new ListNode(
    8,
    new ListNode(
      9,
      new ListNode(
        9,
        new ListNode(
          9,
          new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(1))))
        )
      )
    )
  );

  expect(addTwoNumbers(l1, l2)).toEqual(l3);
});
