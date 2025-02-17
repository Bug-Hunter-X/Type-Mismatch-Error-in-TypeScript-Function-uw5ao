# Type Mismatch in TypeScript Function Call

This repository demonstrates a common error in TypeScript: passing an argument of an incorrect type to a function.  The `greeter` function expects a string, but an array is passed, leading to a type mismatch error.

## How to Reproduce

1. Clone the repository.
2. Compile the code using `tsc bug.ts`.
3. Run the compiled JavaScript code.  You should see a runtime error if you haven't fixed the type issue in `bugSolution.ts`.

## Solution

The solution involves correctly passing a string to the function, demonstrating how to handle arrays with string elements if necessary. This is addressed in `bugSolution.ts`