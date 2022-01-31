//function that returns the length of an array without using length method
const len = (arr) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    count++;
  }
  console.log(count);
};

len([0]);
len([5, 4, 3, 6, 7]);
