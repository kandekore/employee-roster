const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  test("testing to make sure name is correct", () => {
    const example = new Engineer("Bob", 2, "bob@bob.com", "bobgit");
    expect(example.getName()).toBe("Bob");
  });
  test("Make sure ID is correct", () => {
    const example = new Engineer("bob", 2, "bob@bob.com", "bobgit");
    expect(example.getId()).toBe(2);
  });
  test("Make sure email is correct", () => {
    const example = new Engineer("bob", 2, "bob@bob.com", "bobgit");
    expect(example.getEmail()).toBe("bob@bob.com");
  });
  test("Make sure Role is correct", () => {
    const example = new Engineer("bob", 2, "bob@bob.com", "bobgit");
    expect(example.getRole()).toBe("Engineer");
  });
  test("Make sure Github is correct", () => {
    const example = new Engineer("bob", 2, "bob@bob.com", "bobgit");
    expect(example.getGithub()).toBe("bobgit");
  });
});
