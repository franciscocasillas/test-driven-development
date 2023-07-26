const convertToCelsius = function (fahrenheit) {
	let celcius = (((fahrenheit - 32) * 5) / 9).toFixed(1);
	return Number(celcius);
};

const convertToFahrenheit = function (celcius) {
	let fahrenheit = ((celcius * 9) / 5 + 32).toFixed(1);
	return Number(fahrenheit);
};

// Do not edit below this line
module.exports = {
	convertToCelsius,
	convertToFahrenheit,
};
