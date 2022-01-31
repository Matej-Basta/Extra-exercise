//function that returns the length of an array without using length method
const len = (arr) => {
  let count = 0;

  arr.forEach((element) => {
    count++;
  });
  console.log(count);
};

// len([0]);
// len([5, 4, 3, 6, 7]);
// len([0, 0, 0]);

//function that returns the last element of an array without using length method
const last = (arr) => {
  let number = null;
  arr.forEach((element) => {
    number = element;
  });
  console.log(number);
};

// last([0]);
// last([5, 4, 3, 6, 7]);
// last([]);

//function that returns the second to last element of an array without using the length method
const butLast = (arr) => {
  let number = null;
  arr.forEach((element, index) => {
    if (arr[1] !== undefined) {
      if (arr[index + 1] === undefined) {
        number = arr[index - 1];
      }
    }
  });
  console.log(number);
};

// butLast([0, 4]);
// butLast([5, 4, 3, 6, 7]);
// butLast([1]);

//function that reverses the array
const reverse = (arr) => {
  let reversedArr = [];
  arr.forEach((element) => {
    reversedArr.unshift(element);
  });
  console.log(reversedArr);
};

// reverse([0, 4]);
// reverse([5, 4, 3, 6, 7]);
// reverse([1]);

//funciton that checks whether the array is an palindrom
const isPalindrome = (arr) => {
  let reversedArr = [];
  arr.forEach((element) => {
    reversedArr.unshift(element);
  });
  console.log(arr.every((element, index) => element === reversedArr[index]));
};

isPalindrome([5, 4, 3, 4, 5]);
isPalindrome([5, 4, 3, 2, 6]);
isPalindrome([2]);
isPalindrome([2, 3, 2, 2, 2, 2]);
