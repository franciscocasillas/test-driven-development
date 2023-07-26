const removeFromArray = function (arr, n1, n2, n3, n4) {
	let result;
	result = arr.filter((digit) => digit !== n1);
	result = result.filter((digit) => digit !== n2);
	result = result.filter((digit) => digit !== n3);
	result = result.filter((digit) => digit !== n4);
	return result;
};

// Do not edit below this line
module.exports = removeFromArray;
