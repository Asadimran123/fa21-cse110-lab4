1. 3 is printed because 'i' iterates from 0 until the length of the prices array, which has a length of 3. the loop iterates 3 times and on the fourth iteration, when i = 3, the loop no longer runs because the i < prices.length condition returns false. i is also a var which has funtion scope, and console.log() is called within the function 
2. 150 is printed because the loop gets to the last iteration and overwrites the previous saved number from the previous iteration. we are at prices[2] which corresponds to 300. 300 * (1 - .5) = 150. vars have the property to be overwritten so this is okay. 
3. 150 is printed because the loop gets to the last iteration and overwrites the saved value in 'finalPrice' from the previous iteration. we are at prices[2] which corresponds to 300. when we get to line 7, we have 300 * (1-.5) = 150. when we get to line 8, we have (150 * 100) / 100 = 150. this is then pushed into the discounted array. finalPrice is declared as a var which has function scope and console.log() is called within the function. vars can also be overwritten. 
4. this function will return the discounted array which contains the values [50, 100, 150] because the discounted array is declared as a var which has function scope so it can be returned. 
5. an error is returned because i is declared as a let, which only has block scope. it is not accessible outside of the for loop it is declared in and console.log() is called outside of the for loop's scope. 
6. an error is returned because discountedPrice is declared as a let, which only has block scope. it is not accessible outside of the for loop it is declared in and console.log() is called outside of the for loop's scope.
7. 150 is printed. there are no errors like the previous two because even thoguh finalPrice is a let variable, is is declared at the top of the funtion. so, because let varibales have block scope, and console.log() is called within at the top of the function (within the SAME block), it is printed and there are no errors. 
8. the discounted array ([50, 100, 150]) is returned because the array is declared as a let at the top of the function and is not nested in any other blocks within the function. 
9. this error is printed "Process exited with code 1
Uncaught ReferenceError: i is not defined"
this is printed because i is declared as a const which has block scope. it is only accessible in the for loop it is declared in. console.log() is called outside of the scope of the for loop and therefore outside of the scope of the const variable. 
10. 3 is printed because that is the value of i at the end of the loop and i is declared as a const variable at the top of the function and is not nested in any other blocks, so it is accessible throughout the whole funtion block and when console.log() is called. 
11. the discounted array ([50, 100, 150]) is returned because the array is declared as a const at the top of the function and is not nested in any other blocks within the function, so it can be returned. 
12. 
    a. student.name
    b. student['Grad year']
    c. student.greeting()
    d. student['Favorite teacher'].name
    e. student.courses[0]
13. 
    a. 32 because integers map to their exact string representation and + with a string type will convert the other values to strings to concatenate. 
    b. 1 because we cannot subtract strings, so we parse the values as numbers 
    c. 3 because null becomes 0 according to numeric conversion rules
    d. 3null because '3' is a string and the + operator will concatenate the values as the rest of the values are parsed as strings. 
    e. 4 because true corresponds to 1 according to numeric conversion rules and 
    '+' acts as the addition operator because we are working with integers
    f. 0 because false and null both correspond to 0 according to numeric conversion tules
    g. 3undefined because '3' is a string value so the rest of the line is parsed as a string and '+' acts as the concatenation operator
    h. NaN because undefined does not have a valie and we cannot subtract it from a string
14. 
    a. true because '2' is a string so the rest of the line is parsed as an integer. JS uses lexicographical order so 2 is greater than 1
    b. false because the algorithm to compare strings compares each string character by character and 2 > 1 so it returns false
    c. true because the string '2' becomes the integer 2 and 2 is equal to 2
    d. false because even though they are equal value, they are different types
    e. false because true corresponds to the integer value 2
    f. true 
15. == is the equality opertor checks to see if two operands have the same value while === is the strict equality operator, which checks value and type. 
16. see part2-question17.js file
17. the result is the array [2, 4, 6]. the modofyArray function creates a new array and filles the indecies with array in the parameter. the doSomething function doubles each value of each index. we used doSomething as a varaible and thats what doubled each of the values. 
18. see part2-question18.js file
19. 1
    4
    3
    2
