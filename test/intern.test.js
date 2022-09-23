const Intern = require("../lib/Intern");

describe("Intern", () => {
  test("testing to make sure name is correct", () => {
    const example = new Intern("Bob", 2, "bob@bob.com", "Hogwarts");
    expect(example.getName()).toBe("Bob");
  });
  test("Make sure ID is correct", () => {
    const example = new Intern("bob", 2, "bob@bob.com", "Hogwarts");
    expect(example.getId()).toBe(2);
  });
  test("Make sure email is correct", () => {
    const example = new Intern("bob", 2, "bob@bob.com", "Hogwarts");
    expect(example.getEmail()).toBe("bob@bob.com");
  });
  test("Make sure Role is correct", () => {
    const example = new Intern("bob", 2, "bob@bob.com", "Hogwarts");
    expect(example.getRole()).toBe("Intern");
  });
  test("Make sure School is correct", () => {
    const example = new Intern("bob", 2, "bob@bob.com", "Hogwarts");
    expect(example.getSchool()).toBe("Hogwarts");
  });
});
