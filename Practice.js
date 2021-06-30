// 1. Write 3 functions to perform addition, subtraction and multiplication on 2 numbers.
// let x = 2, y = 3;
// function add(x, y) {
//     return x+y;
// }
// console.log(`Sum of ${x} and ${y} is ${add(x,y)}`);

// let subtract = function(x,y) {
//     return x-y;
// }
// console.log(`Subtraction of ${x} with ${y} is ${subtract(x,y)}`);

// let multiply = (x,y)=>x*y;
// console.log(`Multiplication of ${x} and ${y} is ${multiply(x,y)}`);

//References
//https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-6.php
//https://www.programiz.com/javascript/examples/check-leap-year
//
// 2. Write a function to check whether the input year is leap year or not.
// program to check leap year
// a. The year is evenly divisible by 4;
// b. If the year can be evenly divided by 100, it is NOT a leap year, unless;
// c. The year is also evenly divisible by 400. Then it is a leap year.

// function checkLeapYear(year) {

//     //three conditions to find out the leap year
//     if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
//         console.log(`${year} is a leap year`);
//     } else {
//         console.log(`${year} is not a leap year`);
//     }
// }

// // // take input
// // // const year = prompt('Enter a year:');
// checkLeapYear(1998);
// checkLeapYear(2000);


// 3. Write a function to convert a length from inches to cm (approx. 2.5 cm in 1 inch).
// function covert_inch_to_cm(inches) {
//     console.log(`${inches} inches is approximately ${inches*2.54} centimeter`);
// }
// covert_inch_to_cm(1);
// covert_inch_to_cm(2);


// 4. Write a function to check whether the input is null or blank. Return true if input is
// blank/null, false otherwise.

function check_null_blank(input) {

}

check_null_blank();
check_null_blank();

// let x = 'test';
// console.log(`Value of x is: ${x}`);
// console.log("Value of x is: " + x);

// Dixant's Sample code
// -------------------------------------------
// Conditional Statements
// let age = 10;
// if (age > 18) {
//   console.log("You can vote!");
// } else {
//   console.log("You cannot vote right now.");
// }

// Functions
// function print_sum(a, b) {
//   console.log(`a: ${a}`);
//   console.log(`b: ${b}`);

//   console.log(`a + b = ${a + b}`);
// }

// print_sum(2, 3);

// function add(a, b) {
//   return a + b;
// }

// var sum = add(2, 3);

// console.log(`Sum: ${sum}`);

// // anonymous functions
// var function_to_print_sum = function (a, b) {
//   console.log("a + b = " + (a + b));
// };

// Arrow functions
// var function_to_print_sum = (a, b) => {
//     console.log("a + b = " + (a + b));
//   };
//   function_to_print_sum(4, 4);


//Call back functions useful (like placeholder?) in generic function
//-------------------------------------------
// function_to_print_sum(4, 4);
// function add(a, b) {
//     return a + b;
//   }
  
//   function product(a, b) {
//     return a * b;
//   }
  
//   function print_after_operation(a, b, operation) {
//     var result = operation(a, b);
//     console.log("Result: " + result);
//   }
  
//   print_after_operation(3, 4, add);
//   print_after_operation(3, 4, product);
//   print_after_operation(3, 4, (a, b) => {
//     return a - b;
//   });
//-------------------------------------------

// Usefulness of template literals by example
// let x = 12;
// let y = 3;
// console.log(
//   "Value of x: " + x + ", Value of y: " + y + ", and " + x + "/" + y + " = "
//   +(x / y)
// );
// console.log(`Value of x: ${x}, Value of y: ${y}, and ${x}/${y} = ${x / y}`);