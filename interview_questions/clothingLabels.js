// A clothing company needs to print out labels for each size of clothing for every style they have.
// Please create a function that takes an array of clothing items, then returns the proper label for each size

const array = ["Purple Shirt", "Green Shirt"];

function clothingLabels(array) {
  let clothing_options = [];
  for (item in array) {
    for (let size = 0; size < 7; size++) {
      clothing_options.push(array[item] + ` Size: ${size}`);
    }
  }
  return clothing_options;
}

console.log(clothingLabels(array));
