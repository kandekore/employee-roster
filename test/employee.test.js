const Employee = require("../lib/Employee");

describe("Employee", () => {
  test("testing to make sure name is correct", () => {
    const example = new Employee("Bob", 2, "bob@bob.com");
    expect(example.getName()).toBe("Bob");
  });
  test("Make sure ID is correct", () => {
    const example = new Employee("bob", 2, "bob@bob.com");
    expect(example.getId()).toBe(2);
  });
  test("Make sure email is correct", () => {
    const example = new Employee("bob", 2, "bob@bob.com");
    expect(example.getEmail()).toBe("bob@bob.com");
  });
  test("Make sure ID is correct", () => {
    const example = new Employee("bob", 2, "bob@bob.com");
    expect(example.getRole()).toBe("Employee");
  });
});
