const {LinkedList, ListNode} = require('../lib/linked-list');

describe("LinkedList", ()=> {
  let emptyList, l1, l2, l3, l5;

  beforeEach(()=> {
    emptyList = new LinkedList();

    l1 = new LinkedList();
    l1.prepend(1);

    l2 = new LinkedList();
    l2.prepend(1);
    l2.prepend(2);

    l3 = new LinkedList();
    l3.prepend(1);
    l3.prepend(2);
    l3.prepend(3);

    l5 = new LinkedList();
    l5.prepend(1);
    l5.prepend(2);
    l5.prepend(3);
    l5.prepend(4);
    l5.prepend(5);
  });

  test("initial sizes", ()=> {
    expect(emptyList.size()).toBe(0);
    expect(l1.size()).toBe(1);
    expect(l2.size()).toBe(2);
    expect(l3.size()).toBe(3);
    expect(l5.size()).toBe(5);
  });

  test("isEmpty", ()=> {
    expect(emptyList.isEmpty()).toBe(true);
    expect(l1.isEmpty()).toBe(false);
    expect(l2.isEmpty()).toBe(false);
    expect(l3.isEmpty()).toBe(false);
    expect(l5.isEmpty()).toBe(false);
  });

  test("prepend", ()=> {
    let ll = new LinkedList();

    expect(ll.size()).toBe(0);

    ll.prepend(1);
    expect(ll.size()).toBe(1);

    ll.prepend(1);
    expect(ll.size()).toBe(2);

    ll.prepend(1);
    expect(ll.size()).toBe(3);
  });
});
