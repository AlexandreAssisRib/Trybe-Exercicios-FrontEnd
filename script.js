const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const toFahrenheit = () => ((getMarsTemperature()) * 9/5) + 32;

const temperatureInFahrenheit = (temperature) =>
  console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

const greet = () =>
  console.log(`Hi there! Curiosity here. Right now is ${getMarsTemperature()}ºC at Mars`);

// definição da função sendMarsTemperature...
const sendMarsTemperature = (callback) => setTimeout( () => console.log(callback()),messageDelay());
  
sendMarsTemperature(temperatureInFahrenheit); // imprime "It is currently 47ºF at Mars", por exemplo
sendMarsTemperature(greet); // imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo