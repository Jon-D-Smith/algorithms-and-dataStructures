function fullSum(low, high) {
  if (high == low) {
    return low;
  }

  return high + fullSum(low, high - 1);
}

console.log(fullSum(1, 10));
