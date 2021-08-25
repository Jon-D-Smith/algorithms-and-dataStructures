// For a range of 100, print all multiples of 3 as "Fizz", all multiples of 5 as "Buzz", and all multiples of 3 and 5 as "FizzBuzz". All other numbers should return normally.

function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("fizz Buzz");
    } else if (i % 3 == 0) {
      console.log("fizz");
    } else if (i % 5 == 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz();
