1. 20 
2. 20
3. 20
4. Uncaught ReferenceError: result is not defined
Process exited with code 1
There is an error because the result variable is only accessible within the first 'if' block. it is not defined for the whole function. 
5. Process exited with code 1
Uncaught TypeError: Assignment to constant variable.
there is an error because we cannot reassign the result varible because it is declared as a const, which has block scope but cannot be reassigned
6. Process exited with code 1
Uncaught TypeError: Assignment to constant variable.
there is an error because we cannot reassign the result varible because it is declared as a const, which has block scope but cannot be reassigned. it is also not available outside the scope of the 'if' block


