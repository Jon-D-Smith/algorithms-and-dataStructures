const farenheit_readings = [92, 90, 91, 95, 91, 92];

function averageCelcius(farenehit_readings) {
  let celsius_numbers = [];

  farenheit_readings.map((reading) => {
    const celsius_conversion = (reading - 32) / 1.8;
    celsius_numbers.push(celsius_conversion);
  });

  let sum = celsius_numbers.reduce((sum, num) => sum + num);

  console.log(sum / celsius_numbers.length);
}

averageCelcius(farenheit_readings);
