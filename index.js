function sumItems(array) {
  let sum = 0;
  for (const item of array) {
    sum += Array.isArray(item) ? sumItems(item) : item;
  }
  return sum;
}

module.exports = sumItems;
