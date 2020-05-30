// The previous chapter introduced the standard function Math.min that returns
// its smallest argument. We can build something like that now. Write a function
// min that takes two arguments and returns their minimum.
// console.time("it took me: ")
// function min(a, b){
//   return a > b ? b : a;
// }
// console.log(min(1,3));
// console.timeEnd("it took me: ")

// console.time("it took them: ")
// function minn(a, b) {
//   if (a < b) return a;
//   else return b;
// }
// console.log(minn(1,3));
// console.timeEnd("it took them: ")



// We’ve seen that % (the remainder operator) can be used to test whether a
// number is even or odd by using % 2 to see whether it’s divisible by two. Here’s
// another way to define whether a positive whole number is even or odd:
// • Zero is even.
// • One is odd.
// • For any other number N, its evenness is the same as N - 2.

// console.time("it took me: ")
// function isEvenn(num){
//   num = num < 0 ? -num : num;
//   if(num == 0){
//       return "even"
//   }else if(num == 1){
//       return "odd"
//   }else return isEvenn(num - 2)
// }
// console.log(isEvenn(-9))
// console.timeEnd("it took me: ")


// console.time("it took them: ")
// function isEven(n) {
//   if (n == 0) return true;
//   else if (n == 1) return false;
//   else if (n < 0) return isEven(-n);
//   else return isEven(n - 2);
// }
// console.log(isEven(-9))
// console.timeEnd("it took them: ")




// You can get the Nth character, or letter, from a string by writing "string"[N].
// The returned value will be a string containing only one character (for example,
// "b"). The first character has position 0, which causes the last one to be found at
// position string.length - 1. In other words, a two-character string has length
// 2, and its characters have positions 0 and 1.
// Write a function countBs that takes a string as its only argument and returns
// a number that indicates how many uppercase “B” characters there are in the
// string.
// Next, write a function called countChar that behaves like countBs, except
// it takes a second argument that indicates the character that is to be counted
// (rather than counting only uppercase “B” characters). Rewrite countBs to
// make use of this new function.
function countBs(string){
  let count = 0;
  for(let i = 0; i < string.length; i++){
      if(string[i] === 'B') count++
  }
  console.log(`there are ${count} Bs in the word ${string}`)
}
countBs("Banana")

function countChar(string, char){
  let count = 0;
  for(let i = 0; i < string.length; i++){
      if(string[i] === char) count++
  }
  console.log(`there are ${count} ${char}s in the word ${string}`)
}
countChar("Banana","a")


function countChar(string, ch) {
  let counted = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == ch) {
      counted += 1;
    }
  }
  return counted;
}

function countBs(string) {
  return countChar(string, "B");
}
