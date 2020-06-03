// Write a range function that takes two arguments, start and end, and returns
// an array containing all the numbers from start up to (and including) end.
// Next, write a sum function that takes an array of numbers and returns the
// sum of these numbers. Run the example program and see whether it does
// indeed return 55.
// As a bonus assignment, modify your range function to take an optional third
// argument that indicates the “step” value used when building the array. If no
// step is given, the elements go up by increments of one, corresponding to the
// old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7,
// 9]. Make sure it also works with negative step values so that range(5, 2, -1)
// produces [5, 4, 3, 2]

// function range(start, end){
//   let array = [];
//   for(let num = start; num <= end; ++num){
//     array.push(num)
//   }
//   return array;
// }
// console.log(range(1,12))

// function sum(...nums){
//   let sum = 0;
//   for(let num of nums){
//     sum += num;
//   }
//   return sum
// }
// console.log(sum(1,2,3,4,5,6,7,8,9,10))

// function rangee(start, end, step){
//   let array = [];
//   for(let num = start; num <= end; num += step){
//     array.push(num)
//   }
//   return array;
// }
// console.log(rangee(1,12,2))

// function rangeee(start, end, step){
//   let array = [];
//   if(step < 0){
//     // [start, end] = [end, start];
//     for(let num = start; num >= end; num += step){
//       array.push(num)
//     }
//     return array;
//   }
//   for(let num = start; num <= end; num += step){
//     array.push(num)
//   }
//   return array;
// }
// console.log(rangeee(5,2,-1));


// Reversing an array
// Arrays have a reverse method that changes the array by inverting the order in
// which its elements appear. For this exercise, write two functions, reverseArray
// and reverseArrayInPlace. The first, reverseArray, takes an array as argument
// and produces a new array that has the same elements in the inverse order. The
// second, reverseArrayInPlace, does what the reverse method does: it modifies
// the array given as argument by reversing its elements. Neither may use the
// standard reverse method.
// Thinking back to the notes about side effects and pure functions in the
// previous chapter, which variant do you expect to be useful in more situations?
// Which one runs faster?

// function reverseArray(array){
//   let arrayLength = array.length;
//   let newArray = [];
//   for(let index in array){
//     newArray[arrayLength - 1 - index] = array[index];
//   }
//   return newArray;
// }

// console.time("reverseArray ")
// console.log(reverseArray([1,2,3,4,5,6,7]))
// console.timeEnd("reverseArray ")

// function reverseArrayInPlace(array){
//   let arrayLength = array.length;
//   let stop = Math.floor((arrayLength/2) - 1);

//   for(let i = 0; i <= stop; i++){
//     let temp = array[arrayLength - 1- i];
//     array[arrayLength - 1- i] = array[i];
//     array[i] = temp;
//   }
//   return array;

// }

// console.time("reverseArrayInPlace ")
// console.log(reverseArrayInPlace([7,6,5,4,3,2,1]));
// console.timeEnd("reverseArrayInPlace ")


// console.time("reverse ")
// console.log([7,6,5,4,3,2,1].reverse());
// console.timeEnd("it reverse ")



/***************  QUESTION 3 **************************************/

/*Write a function deepEqual that takes two values and returns true only if they
are the same value or are objects with the same properties, where the values
of the properties are equal when compared with a recursive call to deepEqual.
To find out whether values should be compared directly (use the === operator
for that) or have their properties compared, you can use the typeof operator.
If it produces "object" for both values, you should do a deep comparison.
But you have to take one silly exception into account: because of a historical
accident, typeof null also produces "object".
The Object.keys function will be useful when you need to go over the properties
of objects to compare them.*/


function deepEqual(x,y){
  if(typeof x === typeof y){
    if(x === y){
      return true;
    }else{
      if(x && y){
        let xKeys = Object.keys(x)
        let yKeys = Object.keys(y)

        if(xKeys.length === yKeys.length){
          for(key of xKeys){
            if(!(yKeys.includes(key))) return false;
          }
          return true;
        }else{
          return false;
        }

      }else{
        return false;
      }
    }
  }else{
    return false
  }
}

// console.log(deepEqual(1,1))
// console.log(deepEqual(1,null))
// console.log(deepEqual(1,'1'))

let obj1 = {
  name: 'Faddal',
  age: 21,
  school: 'Ashesi University'
}

let obj2 = {
  name: 'Faddal',
  age: 21,
  school: 'Ashesi University'
}

console.log(deepEqual(obj1,obj2));
console.log(deepEqual(obj1,null));
console.log(deepEqual(obj2,null));
