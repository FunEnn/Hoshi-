test("text common matcher", () => {
  expect(2 + 2).toBe(4);
  expect(2 + 2).not.toBe(5);
});

test("object common matcher", () => {
  expect(1).toBeTruthy();
  expect(0).toBeFalsy();
});
