function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane User", "John Smith"];

// Solution 1: Accessing the first element of the array
console.log(greeter(user[0])); // Correctly passing a string

// Solution 2: Handling array of strings (more robust)
function greetMultiple(people: string[]): string {
    return people.map(person => "Hello, " + person).join("\n");
}
console.log(greetMultiple(user)); // Correctly handling array of strings