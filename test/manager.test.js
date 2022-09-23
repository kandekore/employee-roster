const Manager = require("../lib/Manager");

describe("Manager", () => {
  test("testing to make sure name is correct", () => {
    const example = new Manager("Bob", 2, "bob@bob.com", 302);
    expect(example.getName()).toBe("Bob");
  });
  test("Make sure ID is correct", () => {
    const example = new Manager("bob", 2, "bob@bob.com", 302);
    expect(example.getId()).toBe(2);
  });
  test("Make sure email is correct", () => {
    const example = new Manager("bob", 2, "bob@bob.com", 302);
    expect(example.getEmail()).toBe("bob@bob.com");
  });
  test("Make sure Role is correct", () => {
    const example = new Manager("bob", 2, "bob@bob.com", 302);
    expect(example.getRole()).toBe("Manager");
  });
  test("Make sure Office number is correct", () => {
    const example = new Manager("bob", 2, "bob@bob.com", 302);
    expect(example.getOfficeNumber()).toBe(302);
  });
});
