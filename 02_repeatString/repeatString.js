const repeatString = function (string, num) {
	let stringNum = "";
	if (num < 0) {
		return "ERROR";
	} else {
		for (let i = 1; i <= num; i++) {
			stringNum += string;
		}
		return stringNum;
	}
};

// Do not edit below this line
module.exports = repeatString;
