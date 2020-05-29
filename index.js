/* NOTE!!!!

all the solutions run. test them one by one by commenting out the others before running the file
or better still copy and paste the parts you wanna test into your editor or browser

*/


/* 1. Write a loop that makes seven calls to console.log to output the following
triangle:
#
##
###
####
#####
######
#######*/

// solution1(My solution)
console.time("It took me: ")
let str = "";

while(str.length < 7){
    str += "#";
    console.log(str);
}
console.timeEnd("It took me: ")

// solution 2(My solution)
// let str = "";

// for(let len = 0; str.length < 7; len++){
//     str += "#";
//     console.log(str)
// }

// solution 3(From Eloquent JavaScript Site)
console.time("It took them: ")
for (let line = "#"; line.length < 8; line += "#")
  console.log(line);
  console.timeEnd("It took them: ")

/*2. Write a program that uses console.log to print all the numbers from 1 to 100,
with two exceptions. For numbers divisible by 3, print "Fizz" instead of the
number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
When you have that working, modify your program to print "FizzBuzz" for
numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz"
for numbers divisible by only one of those).
(This is actually an interview question that has been claimed to weed out
a significant percentage of programmer candidates. So if you solved it, your
labor market value just went up.)*/

// solution 1(My solution)
// console.time("It took me: ")
// let num = 1;
// while(num < 101){
//     if(num % 3 === 0 && num % 5 !== 0 ) console.log("Fizz");
//     else if(num % 5 === 0 && num % 3 !== 0) console.log("Buzz");
//     else if(num % 3 === 0 && num % 5 === 0) console.log("FizzBuzz")
//     else console.log(num);
//     num++
// }
// console.timeEnd("It took me: ")

//solution 2(From Eloquent JavaScript Site)
// console.time("It took them: ")
// for (let n = 1; n <= 100; n++) {
//     let output = "";
//     if (n % 3 == 0) output += "Fizz";
//     if (n % 5 == 0) output += "Buzz";
//     console.log(output || n);
// }
// console.timeEnd("It took them: ")

/*3. Write a program that creates a string that represents an 8×8 grid, using newline
characters to separate lines. At each position of the grid there is either a space
or a "#" character. The characters should form a chessboard.
Passing this string to console.log should show something like this:
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
When you have a program that generates this pattern, define a binding size
= 8 and change the program so that it works for any size, outputting a grid
of the given width and height.*/

//solution 1(My solution)
// console.time("It took me: ")
// for(let i = 0; i < 8; ++i){
//     let row = ""
//     for(let j = 0; j < 8; ++j){
//         if((i + j) % 2 == 0) row += " ";
//         else row += "#";
//     }
//     console.log(row)
// }
// console.timeEnd("It took me: ")

// solution 2(From Eloquent JavaScript)
// console.time("It took them: ")
// let size = 8;
// let board = "";

// for (let y = 0; y < size; y++) {
//   for (let x = 0; x < size; x++) {
//     if ((x + y) % 2 == 0) {
//       board += " ";
//     } else {
//       board += "#";
//     }
//   }
//   board += "\n";
// }

// console.log(board);
// console.timeEnd("It took them: ")