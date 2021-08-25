// A news site would like to take the farenheit readings from all of their local thermometers, then provide an average temperature in both farenheit and celcius.
// Please build a calculator to take the farenheit readings and convert them to the average temperature in celsius

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
