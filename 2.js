const dataset = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5];


function linear(searchValue) {
  let count = 0;
  let result = dataset.find(value => {
    count++;
    return value === searchValue;
  });
  return result === undefined ? `Performed ${count} searches with no results` : count;
}
console.log(linear(30));
console.log(linear(60));

function binary(value, start, end, array = dataset.sort((a, b) => a - b), count = 0) {
  count++;
  start = start === undefined ? 0 : start;
  end = end === undefined ? array.length : end;

  if (start > end) {
    return `Performed ${count} searches with no results`;
  }

  const index = Math.floor((start + end) / 2);
  const item = array[index];

  if (item == value) {
    return count;
  }
  else if (item < value) {
    return binary(value, index + 1, end, array, count);
  }
  else if (item > value) {
    return binary(value, start, index - 1, array, count);
  }
};

console.log(binary(50));
console.log(binary(60));