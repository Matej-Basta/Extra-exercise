//function that returns the length of an array without using length method
const len = (arr) => {
  let count = 0;

  arr.forEach((element) => {
    count++;
  });
  console.log(count);
};

len([0]);
len([5, 4, 3, 6, 7]);
len([0, 0, 0]);

//function that returns the last element of an array without using length method
const last = (arr) => {
  let number = null;
  arr.forEach((element) => {
    number = element;
  });
  console.log(number);
};

last([0]);
last([5, 4, 3, 6, 7]);
last([]);
